import { useState, useEffect } from 'react';

import { TodoContext } from './contexts/TodoContext';

import { Service } from './services/TodoService';

import MyList from './components/MyList';

export default function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {

		Service
			.getItems()
			.then(response => setItems(response.todos));

	}, []);

	return (
		<>
			<TodoContext.Provider value={[items, setItems]}>
				<MyList name="My list" />
			</TodoContext.Provider>
		</>
	)
}