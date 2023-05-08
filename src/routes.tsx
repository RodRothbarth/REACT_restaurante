import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cardapio from './pages/Cardapio';
import Menu from './Components/Menu/Menu';
import BasePage from './Components/BasePage';
import Sobre from './pages/Sobre';
import Footer from './Components/Footer';
import { NotFound } from './pages/notFound';
import { Prato } from './pages/Prato';

export default function AppRoutes() {
	return (
		<main className="container">
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<BasePage />}>
						<Route index element={<Home />} />
						<Route path="cardapio" element={<Cardapio />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="prato/:id" element={<Prato />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}
