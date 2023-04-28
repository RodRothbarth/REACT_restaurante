import cardapio from './itens.json';
import styles from './Itens.module.scss';
import Item from './Item/Item';
import { useEffect, useState } from 'react';

type ICardapio = typeof cardapio[0];
interface Props {
	busca: string;
	filtro: number | null;
	ordem: string;
}

export default function Itens({ busca, filtro, ordem }: Props) {
	const [lista, setLista] = useState(cardapio);

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if (filtro !== null) return filtro === id;
		return true;
	}

	function ordenar(newList: ICardapio[]) {
		switch (ordem) {
			case 'porcao':
				return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
			case 'qdt_pessoas':
				return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
			case 'preco':
				return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
			default:
				return newList;
		}
	}

	useEffect(() => {
		const newList = cardapio.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
		setLista(ordenar(newList));
	}, [busca, filtro, ordem]);

	return (
		<div className={styles.itens}>
			{lista.map((item: ICardapio) => (
				<Item {...item} key={item.id} />
			))}
		</div>
	);
}
