import ship from '@assets/ship.png';
import {
	faAt,
	faPhone,
	faPaperPlane,
	faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactUsForm from './form/ContactUsForm';
import styles from './contact-us.module.scss';

function ContactUs() {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.info}>
					<h1 className={styles.title}>
						запишитесь на ваше первое <mark>занятие!</mark>
					</h1>
					<img
						src={ship}
						alt='Корабль'
						title='Корабль'
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<p className={styles['contacts-title']}>
						Вы можете напрямую обратиться к нашему преподавателю,
						Елизавете Алексеевне
					</p>
					<div className={styles.contacts}>
						<a
							href='mailto:lizkalemesheva@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							<FontAwesomeIcon
								icon={faAt}
								className={styles.icon}
								title='Почта'
							/>
						</a>
						<a
							href='whatsapp://send?phone=79165796095'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							<FontAwesomeIcon
								icon={faSquarePhone}
								className={styles.icon}
								title='Whatsapp'
							/>
						</a>
						<a
							href='https://t.me/liza_leeeem'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							<FontAwesomeIcon
								icon={faPaperPlane}
								className={styles.icon}
								title='Telegram'
							/>
						</a>
						<a
							href='tel:+7 916 579 60 95'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							<FontAwesomeIcon
								icon={faPhone}
								className={styles.icon}
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
