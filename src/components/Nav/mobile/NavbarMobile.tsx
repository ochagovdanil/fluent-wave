import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar-mobile.module.scss';
import { MouseEvent } from 'react';

function NavbarMobile() {
	const [isMobileNavbarShown, setIsMobileNavbarShown] =
		useState<boolean>(false);

	function handleScroll(e: MouseEvent<HTMLParagraphElement>): void {
		e.preventDefault();

		// scroll to a specific section of the page
		const elementClass: string = (
			e.target as HTMLParagraphElement
		).getAttribute('data-scroll-to') as string;

		const element = document.querySelector(
			elementClass
		) as HTMLParagraphElement;
		element.scrollIntoView(true);

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
