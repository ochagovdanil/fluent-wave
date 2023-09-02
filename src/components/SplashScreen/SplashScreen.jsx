import styles from './splash-screen.module.scss';

function SplashScreen() {
	return (
		<div className={styles.container}>
			<p className={styles.text}>Загрузка...</p>
		</div>
	);
}

export default SplashScreen;
