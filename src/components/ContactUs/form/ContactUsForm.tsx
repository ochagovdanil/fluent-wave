import { FormEvent, useEffect, useReducer, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './form.module.scss';
import {
	messageProcessReducer,
	StateType,
} from '@reducers/MessageProcessReducer';

const initialMessageProcess: StateType = {
	message: '',
	isSending: false,
};

function ContactUsForm() {
	const [messageProcess, dispatch] = useReducer(
		messageProcessReducer,
		initialMessageProcess
	);

	// EmailJS keys
	const PUBLIC_KEY: string = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
	const SERVICE_ID: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
	const TEMPLATE_ID: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

	// init EmailJS service with PUBLIC_KEY
	useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, []);

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();

		// validate the form
		const message: string = messageProcess.message;

		if (!message) alert('Заполните поле перед отправкой формы!');
		else {
			dispatch({
				type: 'update_sending',
				isSending: true,
			});

			// send the email
			emailjs
				.send(SERVICE_ID, TEMPLATE_ID, {
					message,
				})
				.then(() => {
					alert('Ваша заявка была успешно отправлена!');

					dispatch({
						type: 'update_message',
						message: '',
					});
				})
				.catch((error: Error) => {
					alert('Что-то пошло не так :(');
					console.log(error);
				})
				.finally(() => {
					dispatch({
						type: 'update_sending',
						isSending: false,
					});
				});
		}
	}

	function setMessage(message: string): void {
		dispatch({
			type: 'update_message',
			message,
		});
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<p className={styles.title}>
				Либо свяжитесь с нами через простую форму. Наша команда ответит
				вам в кратчайшие сроки:
			</p>
			<textarea
				className={styles.textarea}
				value={messageProcess.message}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setMessage(e.target.value)
				}
				placeholder='Оставьте ваши контакты и любые пожелания здесь...'
			></textarea>
			{messageProcess.isSending ? (
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
