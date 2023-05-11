import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import styles from './sigma.module.scss';
export function Sigma() {
	const [array, setArray] = useState<string[]>(new Array(6).fill(''));
	const [value, setValue] = useState('');
	const inputRefs: MutableRefObject<HTMLInputElement[]> = useRef([]);

	const form = (index: number, value: string) => {
		const sett = value.replace(/[^atgc]/gi, '');
		const characters = [...array];
		characters[index] = sett.toUpperCase();
		setArray(characters);

		if (value.length === 6 && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus();
		}
	};

	const testSequence = (array: Array<string>) => {
		for (const item of array) {
			for (let i = 0; i < item.length - 3; i++) {
				if (item[i] === item[i + 1] && item[i] === item[i + 2] && item[i] === item[i + 3]) {
					return 'true'; // Found a sequence of four same string values
				}
			}
		}

		for (let i = 0; i < array.length - 3; i++) {
			for (let y = 0; i < array.length - 3; i++) {
				if (
					array[i + 1][y + 1] === array[i][y] &&
					array[i + 2][y + 2] === array[i][y] &&
					array[i + 3][y + 3] === array[i][y] &&
					array[i][y]
				) {
					return 'true'; // Found a sequence of four same string values
				}
			}
		}

		for (let i = 0; i < array.length - 3; i++) {
			for (let y = 0; i < array.length - 3; i++) {
				if (
					array[i + 1][y - 1] === array[i][y] &&
					array[i + 2][y - 2] === array[i][y] &&
					array[i + 3][y - 3] === array[i][y] &&
					array[i][y]
				) {
					return 'true'; // Found a sequence of four same string values
				}
			}
		}

		return 'false';
	};

	const submit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const sequance = testSequence(array);
		setValue(sequance);
		console.log(sequance);
	};

	return (
		<form className={styles.form} onSubmit={submit}>
			{array.map((item, index) => (
				<div key={index} className={styles.form__line}>
					<p>{index + 1} linha do DNA</p>
					<input
						className={styles.form__input}
						type="text"
						value={item}
						maxLength={6}
						required
						ref={(ref: HTMLInputElement) => (inputRefs.current[index] = ref)}
						onChange={(event) => form(index, event.target.value)}
					/>
				</div>
			))}
			<button className={styles.form__button} type="submit">
				Testar
			</button>
			<p>{value}</p>
		</form>
	);
}
