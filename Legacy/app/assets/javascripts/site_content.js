current_path = [];
function items_at_current_path() {
	items = [];
	var elems;
	if (current_path.length == 0) {
		elems = content.children;
	}
	for (elem in elems) {
		items.push(elems[elem]['title']);
	}
	return items;
}


content = {
	children:
		[	{title:'BitGym'},
			{title:'Zoako'},
			{title:'blogs'},
			{title:'about'}		]
};