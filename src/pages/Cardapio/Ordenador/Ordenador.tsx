import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

type IOpcoes = typeof opcoes[0];

interface IOrdenador {
	ordem: string;
	setOrdem: Dispatch<SetStateAction<string>>;
}

export default function Ordenador({ ordem, setOrdem }: IOrdenador) {
	const [aberto, setAberto] = useState<boolean>(false);
	const nomeOrdem = ordem && opcoes.find((item: IOpcoes) => ordem === item.value)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: ordem !== '',
			})}
			onBlur={() => setAberto(false)}
			onClick={() => setAberto(!aberto)}
		>
			<span> {ordem ? nomeOrdem : 'Ordenar por'}</span>
			{aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: aberto,
				})}
			>
				{opcoes.map((item: IOpcoes) => (
					<div className={styles.ordenador__option} key={item.value} onClick={() => setOrdem(item.value)}>
						{item.nome}
					</div>
				))}
			</div>
		</button>
	);
}
