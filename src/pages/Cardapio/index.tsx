import styles from './Cardapio.module.scss';
import theme from 'styles/Theme.module.scss';
import Buscador from './Buscador/Buscador';
import { useState } from 'react';
import Filtros from './filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './Itens/Itens';

export default function Cardapio() {
	const [busca, setBusca] = useState<string>('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordem, setOrdem] = useState<string>('');

	return (
		<section className={styles.cardapio}>
			<h3 className={theme.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordem={ordem} setOrdem={setOrdem} />
			</div>
			<Itens busca={busca} filtro={filtro} ordem={ordem} />
		</section>
	);
}
