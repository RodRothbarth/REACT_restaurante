import cardapio from 'Data/cardapio.json';
import styles from './home.module.scss';
import theme from 'styles/Theme.module.scss';

type ICardapio = typeof cardapio[0];

export default function Home() {
	let recomendation = [...cardapio];
	recomendation = recomendation.sort(() => 0.5 - Math.random()).splice(0, 3);

	return (
		<section>
			<h3 className={theme.titulo}>Recomendações da cozinha</h3>
			<div className={styles.recomendados}>
				{recomendation.map((item: ICardapio) => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao}>Ver Mais</button>
					</div>
				))}
			</div>
		</section>
	);
}
