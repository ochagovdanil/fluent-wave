import lighthouse from '../assets/lighthouse.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='main-container'>
			<main id='main'>
				<div className='main__content'>
					<h1 className='main__title'>
						FluentWave: Ваш Надежный Репетитор в Изучении{' '}
						<mark>Английского Языка!</mark>
					</h1>
					<p className='main__description'>
						Ваш путь к мастерству на английском начинается здесь.
						Добро пожаловать в мир языковой уверенности с
						FluentWave.
					</p>
					<Link to='/contact-us' className='main__link'>
						Отправить заявку
						<FontAwesomeIcon
							icon={faBolt}
							className='main__bolt-icon'
						/>
					</Link>
				</div>
				<img src={lighthouse} alt='Маяк' className='main__image' />
			</main>
		</div>
	);
}

export default Header;
