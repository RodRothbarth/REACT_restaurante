import styles from './buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface IBusca {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: IBusca) {
	return (
		<div className={styles.buscador}>
			<input
				type="text"
				value={busca}
				onChange={(event) => {
					setBusca(event.target.value);
				}}
				placeholder="Buscar"
			/>
			<CgSearch size={20} color="#4c4d5e" />
		</div>
	);
}
