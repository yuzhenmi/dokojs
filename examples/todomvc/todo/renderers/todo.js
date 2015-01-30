doko.renderer('todo.renderers.Todo', function TodoRenderer() {

	this.selectors({
		'todoList': '#todo-list'
	});

	var mustache = require('Mustache');
	var todoTemplate = require('todo.templates.todo');

	this.appendTodo = function appendTodo(todo) {
		var todoElement = doko.parseHTML(mustache.render(todoTemplate, todo));
		this.select('todoList').append(todoElement);
	};

});