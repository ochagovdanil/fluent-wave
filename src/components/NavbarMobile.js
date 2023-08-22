import { useState } from 'react';
import { Link } from 'react-router-dom';

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
				className={`header__burger-menu ${
					isMobileNavbarShown && 'header__burger-menu--active'
				}`}
				onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
			>
				<span className='header__burger-bar'></span>
				<span className='header__burger-bar'></span>
				<span className='header__burger-bar'></span>
			</div>
			<nav
				className='header__mobile-nav'
				style={isMobileNavbarShown ? { top: 0 } : { top: '-100vh' }}
			>
				<ul className='header__mobile-menu'>
					<li className='header__mobile-list'>
						<p
							className='header__mobile-link'
							data-scroll-to='.why-us'
							onClick={handleScroll}
						>
							Почему мы?
						</p>
					</li>
					<li className='header__mobile-list'>
						<p
							className='header__mobile-link'
							data-scroll-to='.services'
							onClick={handleScroll}
						>
							Услуги
						</p>
					</li>
					<li className='header__mobile-list'>
						<p
							className='header__mobile-link'
							data-scroll-to='.our-team'
							onClick={handleScroll}
						>
							Наша команда
						</p>
					</li>
					<li className='header__mobile-list'>
						<p
							className='header__mobile-link'
							data-scroll-to='.reviews'
							onClick={handleScroll}
						>
							Отзывы
						</p>
					</li>
					<li className='header__mobile-list'>
						<Link to='/contact-us' className='header__mobile-link'>
							Записаться на занятие
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavbarMobile;
