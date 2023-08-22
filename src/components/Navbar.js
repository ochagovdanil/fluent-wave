import { Link } from 'react-router-dom';
import logoBlack from '../assets/logo-black.png';
import logoBlackMini from '../assets/logo-black-mini.png';
import NavbarMobile from './NavbarMobile';

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
			<header className='header'>
				<img
					src={logoBlack}
					alt='Логотип'
					title='FluentWave'
					className='header__logo'
				/>
				<img
					src={logoBlackMini}
					alt='Логотип (маленький)'
					title='FluentWave'
					className='header__logo--mini'
				/>
				<nav className='header__nav'>
					<ul className='header__menu'>
						<li className='header__list'>
							<p
								className='header__link'
								data-scroll-to='.why-us'
								onClick={handleScroll}
							>
								Почему мы?
							</p>
						</li>
						<li className='header__list'>
							<p
								className='header__link'
								data-scroll-to='.services'
								onClick={handleScroll}
							>
								Услуги
							</p>
						</li>
						<li className='header__list'>
							<p
								className='header__link'
								data-scroll-to='.our-team'
								onClick={handleScroll}
							>
								Наша команда
							</p>
						</li>
						<li className='header__list'>
							<p
								className='header__link'
								data-scroll-to='.reviews'
								onClick={handleScroll}
							>
								Отзывы
							</p>
						</li>
						<li className='header__list'>
							<Link to='/contact-us' className='header__link'>
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
