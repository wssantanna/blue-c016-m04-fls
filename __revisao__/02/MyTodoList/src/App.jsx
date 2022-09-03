import MyList from './components/MyList';

import { TodoContext } from './contexts/TodoContext';

export default function App() {


	return (
		<>
			<TodoContext.Provider value={
				[
					{
						id: 1,
						title: 'My first task',
						description: 'Description my first task',
						checked: false
					},
					{
						id: 2,
						title: 'My secondy task',
						description: 'Description my secondy task',
						checked: false
					},
					{
						id: 3,
						title: 'My third task',
						description: 'Description my third task',
						checked: false
					}
				]
			}>
				<MyList name="My list" />
			</TodoContext.Provider>
		</>
	)
}