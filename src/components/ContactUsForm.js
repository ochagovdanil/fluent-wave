import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function ContactUsForm() {
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false); // spinner loader indicator

	// EmailJS keys
	const PUBLIC_KEY = 'CX5FAHNrR9OzItwmm';
	const SERVICE_ID = 'service_ik9p6wo';
	const TEMPLATE_ID = 'template_o4ex72s';

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
		<form className='contact-us__form' onSubmit={handleSubmit}>
			<p className='contact-us__form-title'>
				Либо свяжитесь с нами через простую форму. Наша команда ответит
				вам в кратчайшие сроки:
			</p>
			<textarea
				className='contact-us__textarea'
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Оставьте ваши контакты и любые пожелания здесь...'
			></textarea>
			{isSending ? (
				<FontAwesomeIcon
					icon={faCircleNotch}
					spin
					className='contact-us__spin-icon'
				/>
			) : (
				<input
					type='submit'
					value='Отправить заявку'
					className='contact-us__button'
				/>
			)}
		</form>
	);
}

export default ContactUsForm;
