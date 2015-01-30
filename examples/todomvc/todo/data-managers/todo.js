doko.dataManager('todo.dataManagers.Todo', function TodoDataManager() {

	this.todos = [];

	this.appendTodo = function appendTodo(todo) {
		this.todos.push(todo);
	};

});