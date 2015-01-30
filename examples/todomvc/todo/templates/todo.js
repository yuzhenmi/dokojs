doko.template('todo.templates.todo', function todoTemplate() {
	return
		'<li>' + 
			'<div class="view">' + 
				'<input class="toggle" type="checkbox">' + 
				'<label>{{text}}</label>' + 
				'<button class="destroy"></button>' + 
			'</div>' + 
		'</li>'
});