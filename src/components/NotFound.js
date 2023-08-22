import { Link } from 'react-router-dom';
import whale from '../assets/whale.png';

function NotFound() {
	return (
		<section className='not-found'>
			<div className='not-found__whale-content'>
				<img
					src={whale}
					alt='Плачущий кит'
					title='Плачущий кит'
					className='not-found__image'
				/>
				<p className='not-found__error'>404</p>
				<p className='not-found__main-text'>
					Ой! Вы не должны были найти плачущего кита.
				</p>
			</div>
			<p className='not-found__sub-text'>
				Пожалуйста, дайте ему немного уединения и вернитесь на{' '}
				<Link to='/' className='not-found__link'>
					главную страницу
				</Link>
				.
			</p>
		</section>
	);
}

export default NotFound;
