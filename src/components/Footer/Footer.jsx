import logoWhite from '@assets/logo-white.png';
import submarine from '@assets/submarine.png';
import footerSeaweed from '@assets/footer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`main-container ${styles.div}`}>
				<img
					src={submarine}
					alt=''
					title='Приветик ;)'
					className={styles.submarine}
				/>
				<div className={styles.content}>
					<img
						src={logoWhite}
						alt='Логотип'
						title='FluentWave'
						className={styles.logo}
					/>
					<Link to='/contact-us' className={styles.link}>
						Свяжитесь с нами
						<FontAwesomeIcon
							icon={faComments}
							className={styles['comments-icon']}
						/>
					</Link>
				</div>
			</div>
			<div
				className={`section-transition ${styles.seaweed}`}
				style={{ backgroundImage: `url(${footerSeaweed})` }}
			></div>
		</footer>
	);
}

export default Footer;
