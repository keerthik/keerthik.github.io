---
title: "Pacross"
terminal: pacross.toy
custom_css:
- "css/pacross.css"
draft: true
---

Welcome to Pacross Frontier

<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
      "sample": "/js/pacross/sample.js",
      "app": "/js/pacross/app.js"
    }
  }
</script>

<script type="module" src="/js/pacross/main.js"></script>

<div id="app">
	<div class="main-wrapper">
		{{ message }}
		{{ words }}
		<a :href="url">Click me</a>
		<div style="display:block" @click="cellClicked">CELL A</div>
	</div>
</div>