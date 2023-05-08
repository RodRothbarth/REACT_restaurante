import styles from './item.module.scss';
import itens from '../../../../Data/cardapio.json';
import { TagsPratos } from '../../../../Components/TagsPratos';

type IItem = typeof itens[0];

export default function Item(item: IItem) {
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src={item.photo} alt={item.title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>
				<TagsPratos {...item} />
			</div>
		</div>
	);
}
