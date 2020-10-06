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

	// Adding a new todo to array
	addTodo(text) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: text,
			complete: false,
		};
		// pushing new task onto todos-Array
		this.todos.push(todo);
	}

	// Replacing text at specified ID
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

	// Deleting task by filtering through todos[], excluding specific ID
	deleteTodo(id) {
		// returns everything, but the todo that was specified (ergo deletes)
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}

	// Changing task to done/not done
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
		// DOM tree
		// #main div / root container
		this.app = this.getElement('#main');

		// h1
		this.title = this.createElement('h1');
		this.title.textContent = 'My tasks';

		// Form
		this.form = this.createElement('form');
		this.input = this.createElement('input');
		this.input['type'] = 'text';
		this.input['placeholder'] = 'Add a task';
		this.input['name'] = 'task';

		this.submitButton = this.createElement('button');
		this.submitButton.textContent = 'Submit';

		// List representation of tasks
		this.taskList = this.createElement('ul', 'task-list');

		// Appending and submitting input from form
		this.form.append(this.input, this.submitButton);

		// Appending title, form and list to app
		this.app.append(this.title, this.form, this.taskList);
	}
	// Displaying all tasks, and updating when a change was made
	displayTasks(todos) {
		// TODO more code to come
	}

	// Private getter and resetter for input value
	get _taskText() {
		return this.input.value;
	}

	_resetInput() {
		this.input.value = ``;
	}

	// Creating an element in DOM with an CSS class (optional)
	createElement(htmlTag, cssClassName) {
		const element = document.createElement(htmlTag);
		if (cssClassName) {
			element.classList.add(cssClassName);
		}

		return element;
	}

	// Retrieving an element from DOM
	getElement(selectorName) {
		const element = document.querySelector(selectorName);

		return element;
	}
}

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}
}

const app = new Controller(new Model(), new View());
