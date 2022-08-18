import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

export default function App() {

	return (
		<Browser>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/produto' element={<Product />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Browser>
	)
}
