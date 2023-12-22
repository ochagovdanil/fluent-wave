import { Link } from 'react-router-dom';
import logoBlack from '@assets/logo-black.png';
import logoBlackMini from '@assets/logo-black-mini.png';
import NavbarMobile from '@components/Nav/mobile/NavbarMobile';
import styles from './navbar.module.scss';
import { MouseEvent } from 'react';

function Navbar() {
	// scroll to a specific section of the page
	function handleScroll(e: MouseEvent<HTMLParagraphElement>): void {
		e.preventDefault();

		const elementClass: string = (
			e.target as HTMLParagraphElement
		).getAttribute('data-scroll-to') as string;

		const element = document.querySelector(
			elementClass
		) as HTMLParagraphElement;
		element.scrollIntoView(true);
	}

	return (
		<div className='main-container'>
			<header className={styles.header}>
				<img
					src={logoBlack}
					alt='Логотип'
					title='FluentWave'
					className={styles.logo}
					loading='lazy'
				/>
				<img
					src={logoBlackMini}
					alt='Логотип (маленький)'
					title='FluentWave'
					className={styles['logo--mini']}
					loading='lazy'
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
