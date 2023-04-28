import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';

type IFiltro = typeof filtros[0];
interface IProps {
	filtro: number | null;
	setFiltro: Dispatch<SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: IProps) {
	function selecionarFiltro(item: IFiltro) {
		if (filtro === item.id) return setFiltro(null);
		return setFiltro(item.id);
	}

	return (
		<div className={styles.filtros}>
			{filtros.map((item: IFiltro) => {
				return (
					<button
						className={classNames({
							[styles.filtros__filtro]: true,
							[styles['filtros__filtro--ativo']]: filtro === item.id,
						})}
						key={item.id}
						onClick={() => selecionarFiltro(item)}
					>
						{item.label}
					</button>
				);
			})}
		</div>
	);
}
