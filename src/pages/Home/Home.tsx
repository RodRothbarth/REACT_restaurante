import cardapio from 'Data/cardapio.json';
import styles from './home.module.scss';
import theme from 'styles/Theme.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from '../../interfaces/prato.interface';

export default function Home() {
	let recomendation = [...cardapio];
	recomendation = recomendation.sort(() => 0.5 - Math.random()).splice(0, 3);

	const navigate = useNavigate();

	function redirecionarDetalhes(prato: Prato) {
		navigate(`/prato/${prato.id}`, { state: { prato } });
	}

	return (
		<section>
			<h3 className={theme.titulo}>Recomendações da cozinha</h3>
			<div className={styles.recomendados}>
				{recomendation.map((item: Prato) => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao} onClick={() => redirecionarDetalhes(item)}>
							Ver Mais
						</button>
					</div>
				))}
			</div>
			<h3 className={theme.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do alurorni" />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 385 <br />
					<br />
					Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}
