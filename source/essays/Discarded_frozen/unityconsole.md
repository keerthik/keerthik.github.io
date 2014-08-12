---
layout: post
folder: Software
title: Building ZKDebug
---
## Building ZKDebug: Hackable Unity3D Console
<div class="essay-date"><span class="essay-map">[DRAFT MODE] Last Updated:</span> May 2014</div>

###tl;dr
A hackable Unity3D Developer Console. Without the touchy-feely stuff:
* \[asset\] Unity Asset Store \[link when available\]
* \[thread\] Unity Thread \[link when available\]
* \[repo\] GitHub project \[link when available\]
* \[version\] Built with Unity Pro 4.3.4f1
* what else do you need

Read on below for details of how this was conceived.

### The Goal
To build a hackable (better) debug-logging console in Unity3D. It should have all existing functionality. It should be extendable to improve Unity workflow. Do some basic extensions already. 

###Motivation
1. I use Unity a lot: At {{ site.zk }}, we're building our first title in Unity. {{ site.bg }}'s client-side is dominantly built in Unity. I have another 2 side projects written in Unity. Writing code in Unity is my fulltime job and a half.

2. Console is awesome: I'm a spammer. From variable values, to seeing if code is reached, console logging is how I do it in Unity. Unity's console is pretty awesome - jump to line of code that generated it, rich text support, stack trace, object reference identification

3. It's not awesome enough: Log levels, tagging, object-wise deactivation to name a few. There's probably many more. Serious projects can get very large, with tons of moving parts. The above are just the things *I* wished I could have, there could be more.

4. It's hack-unfriendly now: The Unity log is powerful, but it can never be limitless (like it should be) when it can't be hacked. The Debug class is sealed, and the only available methods are `Log...` and `Draw...` calls.

5. Challenge accepted: I'm trying to cleanse my workflow of tedious dev-tasks. To do this I need to be a better dev. Time to better learn Unity tricks like EditorWindows, debug classes, etc and C# tricks like reflection, namespaces, etc. Make a thing I want + Learning time!

6. Dev blog material: I felt a need to inaugurate the dev posts. Made me set up syntax highlighting on my site, anyway.

###Design

My first challenge was figuring out usage. My two options were:
1. Make my own Debug class `ZKDebug`, and you call `ZKDebug.Log(...)` for example, instead of `Debug.Log`.
2. Implement a callback to the `Debug.Log` class (something I discovered recently), so that you don't have to change any code, just need to enable ZKDebug.

The first is what I've classically done when making impromptu custom debugging tools in Unity. However, this approach has a killer flaw: 
* You have to go through every legacy file and edit your log call to `ZKDebug.Log`.
* Doing the above will break the file on any system that won't have `ZKDebug` set up.

So my first choice is to go down the callback route.

###It's...Codeventure Time!

For my first several iterations, I tested with a simple scene with a single `MonoBehaviour`. It incremented a counter in the update loop, and logged it.

{% highlight csharp %}
public class Director : MonoBehaviour {
	void Start () {
		Debug.Log ("Greetings");
	}

	float countdowner = 1.0f;
	int counter = 0;
	void Update () {
		countdowner -= Time.deltaTime;
		if (countdowner < 0) {
			countdowner = 1.0f;
			counter ++;
			Debug.Log ("Seconds of game: " + counter);
		}
	}
}
{% endhighlight %}


###ZKDebug: bug's in the name
So first I wanted to try out the Logcallback and see how it worked. I decided the simplest thing is to just print some stuff to the existing Console when it received a log.

{% highlight csharp %}
using UnityEditor;
using UnityEngine;
using System.Collections.Generic;

public class ZKDebug : EditorWindow {	
	[MenuItem("ZKTools/ZKDebug Console #%w")]
	static void Init () {
		ZKDebug window = (ZKDebug) EditorWindow.GetWindow(typeof(ZKDebug));
		Application.RegisterLogCallback(window.HandleLog);
	}

	void HandleLog (string message, string stackTrace, LogType type) {
		Debug.Log ("just checking if callback works'");
	}
}
{% endhighlight %}

So when my application would call `Debug.Log`, I expected it to output "just checking if callback works" ollowing every original log output, in the console.

Unfortunately, this did nothing \[[1](#ref1)\]. I considered that possibly `RegisterLogCallback` only does anything when called by a runtime class. To test this, I tried attaching effectively the same logic to a `MonoBehaviour`, as I've seen RegisterCallback used before. It still didn't work. I gave up on testing with just a `Debug.Log` call, and decided to try something else. I even tried replacing it with `print` \[[2](#ref2)\]. Well, since I was making my own window anyway, I thought why not set a `GUILabel` in it with the log message. 

###Noelle Log
{% highlight csharp %}
	private string lastLog = "";
	void OnGUI() {
		GUILayout.Label ("ZKDebug", EditorStyles.boldLabel);
		GUILayout.Label (lastLog, EditorStyles.boldLabel);
	}
	void HandleLog (string message, string stackTrace, LogType type) {
		lastLog = message;
	}
{% endhighlight %}

This worked! ...Sort of.

This made me realize something. I would get to use none of the existing Console. I would have to build the entire console window interaction and display logic from scratch. Ouch. I sure have my work cut out for me.

I have written editor scripts for Unity before, but they have usually been procedures, such as post-processing Android compiles, analyzing levels, inverting meshes, custom menu items. This would be the first time trying to make an EditorWindow with a GUI, let alone an interactive and deep-reaching one such as a console.

The daunting task ahead aside, there were some unexpected issues before I could even get to that.
1. My 'console' only updated my log when I clicked, dragged, or otherwise created a 'majorly manipulative event' in the editor window.
2. The callback registration seemed to expire undesirably under several circumstances. I had to close and re-invoke my EditorWindow to re-register the log callback.

###Repaint

A fairly poorly documented method for EditorWindows is `Repaint()`. I foresee this being extremely useful for any dev writing their own Editor GUIs. Unless there has been a manipulative user-generated event, you need to call `Repaint()` from the EditorWindow. Once I found this, it was fairly simple.
{% highlight csharp %}
	void HandleLog (string message, string stackTrace, LogType type) {
		lastLog = message;
		Repaint();
	}
{% endhighlight %}

Now the label was continually being updated, as long as I invoked the window during runtime.

###Reattach my head please
I figured out that my console was getting detached whenever
* My scripts were recompiling
* I entered or exited play mode
* (suspected) When I switched focus from Unity for long periods of time

Without too much difficulty, I could find all the relevant flags to figure out whether reattachment was necessary or not, and needed to do some reference management ninjutsu to handle the re-registration.

{% highlight csharp %}
	int lastState = 0;
	private bool needsReattachment = false;
	void Update() {
		int thisState = EditorApplication.isCompiling?1:
						EditorApplication.isUpdating?2:
						EditorApplication.isPlaying?3:0;
		needsReattachment = (thisState != lastState);
		if (needsReattachment) Reattach();
		lastState = EditorApplication.isCompiling?1:
					EditorApplication.isUpdating?2:
					EditorApplication.isPlaying?3:0;
	}

	private static ZKDebug window = null;
	[MenuItem("ZKTools/ZKDebug Console #%w")]
	static void Reattach () {
		if (window == null) 
			window = (ZKDebug) EditorWindow.GetWindow(typeof(ZKDebug));
		Application.RegisterLogCallback(window.HandleLog);
		window.needsReattachment = false;
		Debug.Log("Reattached at " + System.DateTime.Now.TimeOfDay) ;
	}
{% endhighlight %}

Worked out quite smoothly! Now I wanted to actually start bringing in some of the much missed Unity console features.

I was inspired to build this after seeing mminer's excellent [in-game console script](https://github.com/mminer/consolation/blob/master/Console.cs). I picked up a few snippets from there, to add

###Scrolling along

We want to see all the logs, not just the last one!
{% highlight csharp %}
	struct Log {
		public string message;
		public string stackTrace;
		public LogType type;
	}

	readonly List<Log> logs = new List<Log>();

	Vector2 scrollPosition;
	float logHeight = 30;
	void OnGUI () {
		GUILayout.Label("ZKDebug DevMode: " + logs.Count + " logs created,
						EditorStyles.boldLabel);

		scrollPosition = EditorGUILayout.BeginScrollView(scrollPosition);
		foreach (Log log in logs) {
			EditorGUILayout.SelectableLabel(log.message, 
							GUILayout.Height(logHeight));
		}
		EditorGUILayout.EndScrollView();
	}

	void HandleLog (string message, string stackTrace, LogType type) {
		logs.Add(new Log {
			message = message,
			stackTrace = stackTrace,
			type = type,
		});
		Repaint ();
	}
{% endhighlight %}

When I tested this, things went as advertised. However, to my dismay, I realized my scrollview was being left looking at whatever log I left it at. That is to say, even when new logs were being added below while I was at the current bottom, the scrollview didn't move down to include the new one like we devs expect consoles to.

### Bottoms up

This turned out to be a little trickier than I thought to figure out the behaviour we'd want: When we're at the bottom, I want a new log to push the scroll to the bottom. If I'm scrolling up, I don't want to be pushed down even if a new log appears. I also don't want to be disturbed if I'm looking at a log somewhere in the middle. Once I scroll to the bottom, I want to be updated automatically again. 

Using the event class to detect scroll events, I was finally able to build something that behaved how I wanted. There were also a lot of annoying details that weren't well documented\[[3](#ref3)\]. 

{% highlight csharp %}
// Properties used for managing scroll position
Vector2 scrollPosition;
float scrollBottom = 0;
bool attemptedScroll = false;
bool scrolledDown = false;
bool newLogArrived = false;
int eventsWaited;
void OnGUI () {
	// Figuring out scroll-mode
	scrollBottom = logs.Count * (logHeight + 2f) - position.height + devLabelHeight + 10f;
	bool scrollToBottom = 	
			!(attemptedScroll && !scrolledDown) && 	// DONT, scrolled up
			IsNearBottom() && (newLogArrived ||	// DO, looking at last and new log is here
			(attemptedScroll && scrolledDown));	// DO, scrolling down near the bottom
	if (scrollToBottom) scrollPosition = EditorGUILayout.BeginScrollView(
				new Vector2(0, scrollBottom), 
				GUILayout.MinHeight(position.height - devLabelHeight - 10f));
	else scrollPosition = EditorGUILayout.BeginScrollView(
				scrollPosition,
				GUILayout.MinHeight(position.height - devLabelHeight - 10f));
	// Log list
	foreach (Log log in logs) {
		EditorGUILayout.SelectableLabel (log.message + "\n" + log.stackTrace, 
		                                 GUILayout.MinHeight(logHeight), 
		                                 GUILayout.MaxHeight(logHeight));
	}
	// Manipulating events
	if (Event.current.type == EventType.scrollWheel) {
		Debug.Log ("Scrolling");
		attemptedScroll = true;
		scrolledDown = Event.current.delta.y > 0;
		eventsWaited = 0;
	} else {
		if (eventsWaited > eventsSinceScrollToWait) attemptedScroll = false;
		else eventsWaited++;
	}
	EditorGUILayout.EndScrollView();
	if (consoleDevMode) {
		GUILayout.Label ("ZKDebug; atBottom: " + IsNearBottom() + "\nscroll: " + scrollBottom + " position: " + scrollPosition.y + " height: " + position.height, 
		                 EditorStyles.boldLabel,
		                 GUILayout.MinHeight(devLabelHeight),
		                 GUILayout.MaxHeight(devLabelHeight));
	}
	newLogArrived = false;
}

void HandleLog (string message, string stackTrace, LogType type) {
	logs.Add(new Log {
		message = message,
		stackTrace = stackTrace,
		type = type,
	});
	newLogArrived = true;
	Repaint ();
}
{% endhighlight %}

Didn't expect it to be that much stuff. I figured since my purpose was to make an easily extensible Console rather than just replicating the built-in one, I might as well clean it up right away. It needed it.

###Code Cleanup

At the top we have our public access functions

{% highlight csharp %}
private static ZKDebug window = null;
static bool visible = false;

// Public Usage Calls
[MenuItem("ZKTools/ZKDebug Console #%w")]
static void CreateOrReattach () {
	if (window == null) window = (ZKDebug) EditorWindow.GetWindow(typeof(ZKDebug));
	visible = true;

	Application.RegisterLogCallback(window.HandleLog);
	window.needsReattachment = false;

	Debug.Log("Reattached at " + System.DateTime.Now.TimeOfDay) ;

	Log.SetLayout(GUILayout.MinHeight(logHeight));
	window.attemptedScroll = false;
	window.scrolledDown = false;
	window.newLogArrived = false;
	window.eventsWaited = 0;
}

public static void Clear() {
	if (window != null) {
		window.logs.Clear();
		window.Repaint();
	}
}
{% endhighlight %}

I figure we'd want some flexibility to the Log struct, so I turned it into a local class. I'll probably want to pop this guy out into a separate class to make it easily extendable.

{% highlight csharp %}
public static void SetLogLayout(params GUILayoutOption[] options) {
	Log.SetLayout(options);
}
	
class Log {
	public string message;
	public string stackTrace;
	public LogType type;
	private static GUILayoutOption[] layoutParams;

	public static void SetLayout(params GUILayoutOption[] options) {
		layoutParams = options;
	}

	public void RenderLog() {
		EditorGUILayout.SelectableLabel (message + "\n" + stackTrace, 
		                                 layoutParams);
	}
}
{% endhighlight %}

The biggest mess is the autoscroll code, so I split that up to feel similar to the built-in GUILayout operations

{% highlight csharp %}
// Properties used for managing scroll position
protected Vector2 scrollPosition;

// These are pretty much private to the autoscroll system
float scrollBottom = 0;
bool attemptedScroll = false;
bool scrolledDown = false;
bool newLogArrived = false;
int eventsWaited;

private bool IsNearBottom() {
	return (scrollPosition.y > (scrollBottom - 2f*(logHeight + 10f)));
}

Vector2 BeginAutoScrollView (params GUILayoutOption[] options) {
	// Figuring out scroll-mode
	scrollBottom = logs.Count * (logHeight + 2f) - position.height + devLabelHeight + 10f;
	bool scrollToBottom = 	!(attemptedScroll && !scrolledDown) && 		// DONT, scrolled up
							IsNearBottom() && (newLogArrived ||			// DO, looking at last and new log is here
		                   	(attemptedScroll && scrolledDown));			// DO, scrolling down near the bottom
	if (scrollToBottom) 
		return EditorGUILayout.BeginScrollView(new Vector2(0, scrollBottom), options);
	else 
		return EditorGUILayout.BeginScrollView(scrollPosition, options);
}

void EndAutoScrollView () {
	// Manipulating events
	if (Event.current.type == EventType.scrollWheel) {
		Debug.Log ("Scrolling");
		attemptedScroll = true;
		scrolledDown = Event.current.delta.y > 0;
		eventsWaited = 0;
	} else {
		if (eventsWaited > eventsSinceScrollToWait) attemptedScroll = false;
		else eventsWaited++;
	}
	newLogArrived = false;
	EditorGUILayout.EndScrollView();
}
{% endhighlight %}

This gives us a much simpler OnGUI call that I like, which can easily be rewritten or extended with modifications.

{% highlight csharp %}
protected void OnGUI () {
	BeginAutoScrollView (GUILayout.MinHeight(position.height - devLabelHeight - 10f));
	// Drawing
	foreach (Log log in logs) {
		log.RenderLog ();
	}
	EndAutoScrollView();
}
{% endhighlight %}

I also moved this into the ZKTools namespace, and hit a few snags with some unintuitive resolutions\[[4](#ref4)\].


### Notes
<a name="ref1"> </a> \[1\] So it turns out that actually `Debug.Log(...)` does not do anything from within the `HandleLog`. If you think about it, this makes sense. If `Debug.Log` wasn't ignored, having a log call inside `HandleLog` would infinitely recursively call `Debug.Log`! D'oh.

<a name="ref2"> </a> \[2\] The [docs](http://docs.unity3d.com/ScriptReference/MonoBehaviour-print.html) for `print` say it's identical to `Debug.Log`, except that its attached to MonoBehaviours and not the Debug class.

<a name="ref3"> </a>\[3\] After some experimentation, I learned:
* the dimensions of the current EditorWindow is found in the `position` Rect property
* scrollview elements have 2px margin added to them.
* two top-level elements have 10px margin added to them
* along with user events, the `Event` class registers repaint and layout events constantly

<a name="ref4"> </a>\[4\] Unity Editor quirks:
* Sometimes editor windows just don't show up. It's normally not a scripting error if you're able to still get log statements out of it. Try resetting your editor layout using the "Layout" dropdown in the top-right of the main Unity window.
* You can't access scripts in the Assets/Editor/ folder from other scripts in the Assets/ folder. 
Editor/ZKTools/Utils.cs is a general purpose helper-function library that I wanted to be able to use in both the Editor and regular scripts, but I wanted to keep it bundled with our editor Git submodule. Turns out the solution is to place it all in Plugins, and separating out just the editorscripts into an Editor subfolder within the plugin:<br>
Assets/ <br>
├ Plugins/ <br>
├ - ├ ZKTools/ <br>
├ - ├ - ├ Utils.cs <br>
├ - ├ - ├ Editor/ <br>
├ - ├ - ├ - ├ ZKDebug.cs <br>
├ - ├ - ├ - ├ ...