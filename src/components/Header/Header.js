import lighthouse from '../../assets/lighthouse.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
	return (
		<div className='main-container'>
			<main id={styles.main}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						FluentWave: Ваш Надежный Репетитор в Изучении{' '}
						<mark>Английского Языка!</mark>
					</h1>
					<p className={styles.description}>
						Ваш путь к мастерству на английском начинается здесь.
						Добро пожаловать в мир языковой уверенности с
						FluentWave.
					</p>
					<Link to='/contact-us' className={styles.link}>
						Отправить заявку
						<FontAwesomeIcon
							icon={faBolt}
							className={styles['bolt-icon']}
						/>
					</Link>
				</div>
				<img src={lighthouse} alt='Маяк' className={styles.image} />
			</main>
		</div>
	);
}

export default Header;
