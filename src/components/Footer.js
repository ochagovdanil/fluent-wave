import logoWhite from '../assets/logo-white.png';
import submarine from '../assets/submarine.png';
import footerSeaweed from '../assets/footer.jpg';
import SectionTransition from './SectionTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className='footer'>
			<div className='main-container'>
				<img
					src={submarine}
					alt=''
					title='Приветик ;)'
					className='footer__submarine'
				/>
				<div className='footer__content'>
					<img
						src={logoWhite}
						alt='Логотип'
						title='FluentWave'
						className='footer__logo'
					/>
					<Link to='/contact-us' className='footer__link'>
						Свяжитесь с нами
						<FontAwesomeIcon
							icon={faComments}
							className='footer__comments-icon'
						/>
					</Link>
				</div>
			</div>
			<SectionTransition image={footerSeaweed} />
		</footer>
	);
}

export default Footer;
