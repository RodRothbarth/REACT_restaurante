import styles from './prato.module.scss';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'Data/cardapio.json';
import { NotFound } from '../notFound';
import { TagsPratos } from '../../Components/TagsPratos';
import BasePage from '../../Components/BasePage';

export function Prato() {
	const { id } = useParams();
	const navigate = useNavigate();
	const prato = cardapio.find((item) => item.id === Number(id));
	if (!prato) {
		return <NotFound />;
	}
	return (
		<Routes>
			<Route path="*" element={<BasePage />}>
				<Route
					index
					element={
						<>
							<button className={styles.voltar} onClick={() => navigate(-1)}>
								{'< Voltar'}
							</button>
							<section className={styles.container}>
								<h1 className={styles.titulo}>{prato.title}</h1>
								<div className={styles.imagem}>
									<img src={prato.photo} alt={prato.title} />
								</div>
								<div className={styles.conteudo}>
									<p className={styles.conteudo__descricao}>{prato.description}</p>
								</div>
								<TagsPratos {...prato} />
							</section>
						</>
					}
				/>
			</Route>
		</Routes>
	);
}
