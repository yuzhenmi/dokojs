doko.defineRenderer('todo.renderers.Todo', function TodoRenderer() {

	this.selectors({
		'todoList': '#todo-list'
	});

	var mustache = doko.require('Mustache');
	var todoTemplate = doko.require('todo.templates.todo');

	this.appendTodo = function appendTodo(todo) {
		var todoElement = doko.parseHTML(mustache.render(todoTemplate, todo));
		this.select('todoList').append(todoElement);
	};

});