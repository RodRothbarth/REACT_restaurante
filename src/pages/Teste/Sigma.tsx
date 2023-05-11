import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import styles from './sigma.module.scss';
export function Sigma() {
	const [array, setArray] = useState<string[]>(new Array(36).fill(''));

	const inputRefs: MutableRefObject<HTMLInputElement[]> = useRef([]);

	const form = (index: number, value: string) => {
		const characters = [...array];
		characters[index] = value;
		setArray(characters);

		if (value && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus();
		}
	};

	const submit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(array);
	};

	return (
		<form className={styles.form} onSubmit={submit}>
			{array.map((item, index) => (
				<input
					className={styles.form__input}
					type="text"
					key={index}
					value={item}
					placeholder="oi"
					maxLength={1}
					required
					ref={(ref: HTMLInputElement) => (inputRefs.current[index] = ref)}
					onChange={(event) => form(index, event.target.value)}
				/>
			))}
			<button className={styles.form__button} type="submit">
				Testar
			</button>
		</form>
	);
}
