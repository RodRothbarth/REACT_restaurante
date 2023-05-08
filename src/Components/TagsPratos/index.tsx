import styles from './tagsPratos.module.scss';
import classNames from 'classnames';
import { Prato } from '../../interfaces/prato.interface';

export function TagsPratos(item: Prato) {
	return (
		<div className={styles.tags}>
			<div
				className={classNames({
					[styles.tags__tipo]: true,
					[styles[`tags__tipo__${item.category.label.toLowerCase()}`]]: true,
				})}
			>
				{item.category.label}
			</div>
			<div className={styles.tags__porcao}>{item.size} g</div>
			<div className={styles.tags__qtdpessoas}>
				Serve {item.serving} pessoa{item.serving === 1 ? '' : 's'}
			</div>
			<div className={styles.tags__valor}>R$ {item.price.toFixed(2)}</div>
		</div>
	);
}
