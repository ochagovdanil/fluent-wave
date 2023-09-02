import { Link } from 'react-router-dom';
import logoBlack from '@assets/logo-black.png';
import logoBlackMini from '@assets/logo-black-mini.png';
import NavbarMobile from './mobile/NavbarMobile';
import styles from './navbar.module.scss';

function Navbar() {
	// scroll to a specific section of the page
	function handleScroll(e) {
		e.preventDefault();

		document
			.querySelector(e.target.getAttribute('data-scroll-to'))
			.scrollIntoView(true);
	}

	return (
		<div className='main-container'>
			<header className={styles.header}>
				<img
					src={logoBlack}
					alt='Логотип'
					title='FluentWave'
					className={styles.logo}
				/>
				<img
					src={logoBlackMini}
					alt='Логотип (маленький)'
					title='FluentWave'
					className={styles['logo--mini']}
				/>
				<nav className={styles.nav}>
					<ul className={styles.menu}>
						<li className={styles.list}>
							<p
								className={styles.link}
								data-scroll-to='.why-us-scroll'
								onClick={handleScroll}
							>
								Почему мы?
							</p>
						</li>
						<li className={styles.list}>
							<p
								className={styles.link}
								data-scroll-to='.services-scroll'
								onClick={handleScroll}
							>
								Услуги
							</p>
						</li>
						<li className={styles.list}>
							<p
								className={styles.link}
								data-scroll-to='.our-team-scroll'
								onClick={handleScroll}
							>
								Наша команда
							</p>
						</li>
						<li className={styles.list}>
							<p
								className={styles.link}
								data-scroll-to='.reviews-scroll'
								onClick={handleScroll}
							>
								Отзывы
							</p>
						</li>
						<li className={styles.list}>
							<Link to='/contact-us' className={styles.link}>
								Записаться на занятие
							</Link>
						</li>
					</ul>
				</nav>
				<NavbarMobile />
			</header>
		</div>
	);
}

export default Navbar;
