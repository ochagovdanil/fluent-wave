import { Link } from 'react-router-dom';
import whale from '../../assets/whale.png';
import styles from './not-found.module.scss';

function NotFound() {
	return (
		<section className={styles.container}>
			<div className={styles['whale-content']}>
				<img
					src={whale}
					alt='Плачущий кит'
					title='Плачущий кит'
					className={styles.image}
				/>
				<p className={styles.error}>404</p>
				<p className={styles['main-text']}>
					Ой! Вы не должны были найти плачущего кита.
				</p>
			</div>
			<p className={styles['sub-text']}>
				Пожалуйста, дайте ему немного уединения и вернитесь на{' '}
				<Link to='/' className={styles.link}>
					главную страницу
				</Link>
				.
			</p>
		</section>
	);
}

export default NotFound;
