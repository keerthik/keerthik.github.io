---
layout: post
folder: tech
title: android modem
update: March 2015
len: 5 min
---

# One-touch Android USB Modem

As a digital nomad, I am often in some form of transit such as a long subway, bus, or high speed rail ride, or waiting in an airport. As such, being able to work literally on the go is a must for my remote job. As such one of the first things I do in any country I land is secure a local SIM with enough data to tide me over for the entire duration of my stay. Thus even if I lose access to wifi, I can tether to my phone.

I used to use the portable Wifi hotspot on my phone (stock Lollipop made this a status bar dropdown option which is great). However, this drained the battery rapidly on both my phone and the laptop that was charging it, and in these circumstances usually that's the last thing I wanted.

I discovered Android provides a USB internet tether option on Android, but it didn't work out of the box on my Macbook Air. Since my phone is usually plugged in to my computer (as an Android dev), I'd like to conserve phone battery, and my laptop is the only device I need to share internet with, I decided to dive a little deeper to getting USB tethering to work.

Once I figured it out, in fact, I've found myself doing this so often, that the number of steps involved in getting reconnected has gotten too long for me. On my Nexus 5 (Lollipop) device, since I normally keep data off to preserve battery, I need to first pull-down status bar > Data > Enable. Then I have to navigate to Apps > Settings > (More) > Tethering and Hotspot > USB Tethering. Then on my Macbook (OSX 10.9.5) I need to disable the Wifi so that it falls back to the USB internet. It's a lot of fumbling about on my phone -- usually in uncomfortable spaces -- when I'd rather just leave it in my pocket.

So I decided, as any reasonable technical person would, that I need to automate it \[[xkcd ref 1](http://xkcd.com/1205/)\]\[[xkcd ref 2](http://xkcd.com/1319/)\](1).

## The Order of Things
This is fairly involved with the technical bits of Android, so as one would expect, your device needs to be rooted \[[1](#refs)\]. This might involve wiping your phone, so do this first.

You're also going to need the Android SDK, or at least the [SDK tools](http://developer.android.com/sdk/index.html#Other) - most importantly adb, for your computer.

Lastly, you're going to need to "unsecure" your phone's adbd server. This is the portion of your phone's operating system that receives instructions from adb running on your computer. You want to unsecure it so that it gives full access to adb over USB.

Verify that your bootloader unlocking, device rooting, and adbd unsecuring worked out. Then restore any apps/data/accounts anything needed on your phone for day-to-day use. Now you're ready to set up your phone for some nice auto-internet.

## Getting USB Internet Tether for OSX
It appears OSX does not support the stock Android USB modem operation mode. Luckily, Joshua Wise's [HoRNDIS](http://joshuawise.com/horndis) driver for Mac enables this. Followed the instruction, worked like a charm. Great.

You should now be able to get USB internet from your phone the layman way - plug it in, make sure everything is turned on on your phone, turn off your wifi, and you're good to go. Now let's automate.

## ADB commands
ADB is a power tool that's useful for all kinds of situations. Well, when you're a programmer, maybe everything looks like a nail...or something. Either way, getting familiar with the adb is a great way to deal with all kinds of situations your phone my encounter, especially since with the way modern smartphones work, there's a hundred ways you could be prevented from interacting with it normally - the screen could crack, the digitizer could fail, the display could fail, you could get locked out, or more likely something I haven't even imagined yet. It's one of those moments where you just wish you had a brick with hardware buttons that did nothing but dial other bricks with buttons.

But at least with a laptop and adb, you can pull some tricks on your phone by typing magic phrases into your terminal. I use a mac and will mostly be speaking to that.

If you happen to own the combination of a macbook air and a newly updated nexus5, then [this](../webtoys/servicelookup.sh) is the simple script I use, reproduced here:

{% highlight bash %}
#!/bin/bash   

# Assumes single phone
# Turn on mobile data in case it was off
adb shell "svc data enable"
# Turn on USB tethering [r5.0.1]
adb shell "service call connectivity 30 i32 1"

# get laptop wifi device
CURRENT_DEVICE=$(networksetup -listallhardwareports | awk '$3=="Wi-Fi" {getline; print $2}')
# turn off wifi
networksetup -setairportpower $CURRENT_DEVICE off
{% endhighlight %}

Assuming you have the same devices as me, it should just work for you if you run it after the above while plugged in on USB.

But just because I have recently become a .sh junkie, and it took a bit of work to understand what's going on, I'll give a brief explanation of stuff so that you can customize the script for your own devices and uses.

### Simple bits
The adb shell is effectively a command line on your phone that you get to manipulate with your laptop. Using it, we turn on your phone's data connection. This is effectively toggling the "Data ON" switch from your status bar drawer.
After the magic "service" call (described below), find our computer's wifi adapter id and turn it off so that the USB tether will kick in.

### The Magic Service Call
The `service` function refers to several exposed classes of the Android OS, that access nearly every feature of the system. The call format involves referring to the name of the service class, the method index we want to call from within the service's ordered methods as an integer, followed by the parameters in sequence, in the format "type" and then "value".

Basically, I discovered that the function to turn on USB tethering belongs to the connectivity class. So I went ahead and fished out the [connectivity interface file](https://android.googlesource.com/platform/frameworks/base/+/android-5.0.1_r1/core/java/android/net/IConnectivityManager.aidl) from the Android repository. Note that I had to get it from the 5.0.1_r1 repository because that's what my phone is running right now. 

Once in there, I found the `setUsbTethering(boolean enable)` method was the 30th method signature. Note that the service class methods are indexed starting from 1. This is probably because some non-interface function like the constructor takes up the 0 slot. Since the command line tool only supports i32 (integer) and s16 (16-character string) as parameters, we use i32 for booleans as well. An integer of 0 translates to false and 1 to true, as in standard integer-boolean conversion.

## Coming Soon
I have been working on scripts to determine your Android version, and then determine the repository for its source on Google, and then determine the riht index for function in the interface file, so that this script can be more universally fire-n-forget, but for now you'll have to use the information above and modify the script accordingly for it to work with your combination of devices.

## References
[Rooting Nexus5](http://www.androidrootz.com/2013/11/how-to-root-nexus-5-windowsmaclinuxubun.html)

[ADB Insecure](http://forum.xda-developers.com/showthread.php?t=1687590)

[Calling Android services](http://ktnr74.blogspot.tw/2014/09/calling-android-services-from-adb-shell.html)

[Android svc commands](https://thangamaniarun.wordpress.com/2013/04/19/useful-android-adb-commands-over-usbwi-fi/)

[Turn off Wifi](http://www.dgkapps.com/blog/osx-tips/osx-tips-turn-off-wifi-from-the-command-line/)

- - -
(1) For the record, I grossly violated xkcd reference 2. I spent about 20 hours for a task I did maybe 3 times a week and shaved off 30 seconds (should have only spent 6 hours max).