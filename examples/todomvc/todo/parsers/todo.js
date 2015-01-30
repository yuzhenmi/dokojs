doko.parser('todo.parsers.Todo', function TodoParser() {

	this.selectors({
		'newTodo': '#new-todo'
	});

	this.getNewTodo = function getNewTodo() {
		var newTodoElement = this.select('newTodo');
		var todo = {
			text: newTodoElement.val()
		};
		return todo;
	};

});