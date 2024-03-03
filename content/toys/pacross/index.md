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
      "tools": "/js/tools.js",
      "app": "/js/pacross/app.js"
    }
  }
</script>

<script type="module" src="/js/pacross/main.js"></script>

<div id="app">
	<div class="main-wrapper">
		<div class="grid">
      <div v-for="(row, ri) in grid" class="row">
        <div v-for="(cell, ci) in row" class="cell" :class="{ 'cell-active': cell == 1 }" @click="cellClicked">{{ grid[ri][ci] }}</div>
      </div>
    </div>
		{{ grid }}
		<a :href="url">Click me</a>
		<div style="display:block" @click="cellClicked">CELL A</div>
	</div>
</div>

# What we are doing
- make a representation of the grid (no letters) from the words
- draw boxes representing the grid.

