doko.controller('todo.controllers.Todo', function TodoController() {

	this.selectors({
		'newTodo': '#new-todo',
		'todo': '#todo-list > li',
		'destroyTodoButton': '#todo-list > li .destroy'
	});

	var keyCodes = require('common.helpers.keyCodes');
	var TodoParser = require('todo.parsers.Todo');
	var TodoDataManager = require('todo.dataManagers.Todo');
	var TodoRenderer = require('todo.renderers.Todo');

	var todoParser = TodoParser.createInstance(this);
	var todoDataManager = TodoDataManager.createInstance();
	var todoRenderer = TodoRenderer.createInstance(this);

	this.handleKeydownNewTodo = function handleKeyDownNewTodo(event, data) {
		if (event.which === keyCodes.ENTER) {
			var newTodo = todoParser.getNewTodo();
			todoDataManager.appendTodo(newTodo);
			todoRenderer.appendTodo(newTodo);
		}
	};

	this.on('keydown', {
		'newTodo': this.handleKeydownNewTodo
	});

});
