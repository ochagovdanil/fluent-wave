import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './form.module.scss';

function ContactUsForm() {
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false); // spinner loader indicator

	// EmailJS keys
	const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
	const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
	const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

	// init EmailJS service with PUBLIC_KEY
	useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		// validate the form
		if (!message) {
			alert('Заполните поле перед отправкой формы!');
		} else {
			setIsSending(true);

			// send the email
			emailjs
				.send(SERVICE_ID, TEMPLATE_ID, {
					message,
				})
				.then(() => {
					alert('Ваша заявка была успешно отправлена!');
					setMessage('');
				})
				.catch(error => {
					alert('Что-то пошло не так :(');
					console.log(error);
				})
				.finally(() => {
					setIsSending(false);
				});
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<p className={styles.title}>
				Либо свяжитесь с нами через простую форму. Наша команда ответит
				вам в кратчайшие сроки:
			</p>
			<textarea
				className={styles.textarea}
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Оставьте ваши контакты и любые пожелания здесь...'
			></textarea>
			{isSending ? (
				<FontAwesomeIcon
					icon={faCircleNotch}
					spin
					className={styles['spin-icon']}
				/>
			) : (
				<input
					type='submit'
					value='Отправить заявку'
					className={styles.button}
				/>
			)}
		</form>
	);
}

export default ContactUsForm;
