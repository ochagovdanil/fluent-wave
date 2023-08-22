import ship from '../assets/ship.png';
import {
	faAt,
	faPhone,
	faPaperPlane,
	faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactUsForm from './ContactUsForm';

function ContactUs() {
	return (
		<section className='contact-us'>
			<div className='contact-us__container'>
				<div className='contact-us__info'>
					<h1 className='contact-us__title'>
						запишитесь на ваше первое <mark>занятие!</mark>
					</h1>
					<img
						src={ship}
						alt='Корабль'
						title='Корабль'
						className='contact-us__image'
					/>
				</div>
				<div className='contact-us__content'>
					<p className='contact-us__contacts-title'>
						Вы можете напрямую обратиться к нашему преподавателю,
						Елизавете Алексеевне
					</p>
					<div className='contact-us__contacts'>
						<a
							href='mailto:lizkalemesheva@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-us__link'
						>
							<FontAwesomeIcon
								icon={faAt}
								className='contact-us__icon'
								title='Почта'
							/>
						</a>
						<a
							href='whatsapp://send?phone=79165796095'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-us__link'
						>
							<FontAwesomeIcon
								icon={faSquarePhone}
								className='contact-us__icon'
								title='Whatsapp'
							/>
						</a>
						<a
							href='https://t.me/liza_leeeem'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-us__link'
						>
							<FontAwesomeIcon
								icon={faPaperPlane}
								className='contact-us__icon'
								title='Telegram'
							/>
						</a>
						<a
							href='tel:+7 916 579 60 95'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-us__link'
						>
							<FontAwesomeIcon
								icon={faPhone}
								className='contact-us__icon'
								title='Телефон'
							/>
						</a>
					</div>
					<ContactUsForm />
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
