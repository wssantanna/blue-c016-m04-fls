import React from 'react';
import ReactDOM from 'react-dom/client';

import { Server, Model } from 'miragejs';

import App from './App';

import './assets/global.scss';

new Server({

	// Representa o Mock do banco de dados.

	models: {
		todo: Model,
	},

	// Valor inicial do Mock do banco de dados.

	seeds(server) {

		server.create("todo", {
			id: 1,
			title: 'My first task',
			description: 'Description my first task',
			checked: false
		});

		server.create("todo", {
			id: 2,
			title: 'My secondy task',
			description: 'Description my secondy task',
			checked: false
		});

		server.create("todo", {
			id: 3,
			title: 'My third task',
			description: 'Description my third task',
			checked: false
		});
	},

	// Configurações das rotas do servidor.

	routes() {

		// Base URL do endpoint.

		this.urlPrefix = 'https://www.blueedtech.com.br/';

		// Caminho para o endpoint.

		this.namespace = 'api/todos';

		// Endpoints da aplicação GET, POST, PATCH, DELETE...

		this.get('/', (schema) => {
			return schema.todos.all();
		});

		this.post('/', (schema, request) => {

			let newTask = JSON.parse(request.requestBody);

			return schema.todos.create(newTask);
		});

		this.patch('/:id', (schema, request) => {
			let taskUpdated = JSON.parse(request.requestBody);
			let idTask = request.params.id;
			let taskFound = schema.todos.find(idTask);

			return taskFound.update(taskUpdated);
		});

		this.delete('/:id', (schema, request) => {
			let idTask = request.params.id;

			return schema.todos.find(idTask).destroy();
		});

	}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
