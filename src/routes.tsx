import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cardapio from './pages/Cardapio';
import Menu from './Components/Menu/Menu';
import styles from './routes.module.scss';
import BasePage from './Components/BasePage';

export default function AppRoutes() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<BasePage />}>
						<Route index element={<Home />} />
						<Route path="cardapio" element={<Cardapio />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
