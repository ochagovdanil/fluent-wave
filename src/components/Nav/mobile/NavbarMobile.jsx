import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar-mobile.module.scss';

function NavbarMobile() {
	const [isMobileNavbarShown, setIsMobileNavbarShown] = useState(false);

	function handleScroll(e) {
		e.preventDefault();

		// scroll to a specific section of the page
		document
			.querySelector(e.target.getAttribute('data-scroll-to'))
			.scrollIntoView(true);

		// hide the mobile navbar
		setIsMobileNavbarShown(false);
	}

	return (
		<>
			<div
				className={`${styles['burger-menu']} ${
					isMobileNavbarShown && styles['burger-menu--active']
				}`}
				onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
			>
				<span className={styles['burger-bar']}></span>
				<span className={styles['burger-bar']}></span>
				<span className={styles['burger-bar']}></span>
			</div>
			<nav
				className={styles.nav}
				style={isMobileNavbarShown ? { top: 0 } : { top: '-100vh' }}
			>
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
		</>
	);
}

export default NavbarMobile;
