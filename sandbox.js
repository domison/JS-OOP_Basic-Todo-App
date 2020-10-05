/*
JavaScript File
JS MVC Todo App
https://github.com/domison/
*/

'use strict';

class Model {
	constructor() {
		// Showing the state of model, todo objects in Array, some data pre-inputted
		this.todos = [
			{ id: 1, text: 'Buy groceries', complete: false },
			{ id: 2, text: 'Code four hours today', complete: false },
			{ id: 3, text: 'Play tennis with Marian', complete: false },
			{ id: 4, text: 'Cook dinner: Massamam Curry', complete: false },
		];
	}

	// adding a new todo to array
	addTodo(text) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: text,
			complete: false,
		};
		// pushing new task onto todos-Array
		this.todos.push(todo);
	}

	// replacing text at specified ID
	editTodo(id, newText) {
		// map iterates through all tasks in todos[]
		this.todos = this.todos.map((todo) =>
			todo.id === id
				? {
						id: todo.id,
						text: newText,
						complete: todo.complete,
				  }
				: todo
		);
	}

	// deleting task by filtering through todos[], excluding specific ID
	deleteTodo(id) {
		// returns everything, but the todo that was specified (ergo deletes)
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}

	// changing task to done/not done
	togglingTodo(id) {
		this.todos = this.todos.map((todo) =>
			todo.id === id
				? {
						id: todo.id,
						text: todo.text,
						complete: !todo.complete,
				  }
				: todo
		);
	}
}

class View {
	constructor() {
		// TODO more code there
	}
}

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}
}

const app = new Controller(new Model(), new View());
