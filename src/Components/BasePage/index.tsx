import styles from './basePage.module.scss';
import { Outlet } from 'react-router-dom';
import theme from 'styles/Theme.module.scss';

export default function BasePage() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>A casa do código e da massa</div>
			</header>
			<div className={theme.container}>
				<Outlet />
			</div>
		</>
	);
}
