doko.defineController('todo.controllers.Todo', function TodoController() {

	this.selectors({
		'newTodo': '#new-todo',
		'todo': '#todo-list > li',
		'destroyTodoButton': '#todo-list > li .destroy'
	});

	var todoParser = doko.useParser('todo.parsers.Todo', this);
	var todoDataManager = doko.useDataManager('todo.dataManagers.Todo');
	var todoRenderer = doko.useRenderer('todo.renderers.Todo', this);

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