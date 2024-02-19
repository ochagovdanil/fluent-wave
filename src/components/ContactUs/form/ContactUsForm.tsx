import emailjs from '@emailjs/browser';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';

type FormType = {
	textareaMessage: string;
};

function ContactUsForm() {
	const [isSending, setIsSending] = useState<boolean>(false); // loading indicator of the form

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormType>();

	// EmailJS keys
	const PUBLIC_KEY: string = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
	const SERVICE_ID: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
	const TEMPLATE_ID: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

	// init EmailJS service with PUBLIC_KEY
	useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, []);

	function onSubmit(data: FormType): void {
		const message: string = data.textareaMessage; // message from the form <textarea>

		setIsSending(true);

		// send the email
		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, {
				message,
			})
			.then(() => {
				alert('Ваша заявка была успешно отправлена!');

				reset(); // clear the form
			})
			.catch((error: Error) => {
				alert('Что-то пошло не так :(');
				console.log(error);
			})
			.finally(() => {
				setIsSending(false);
			});
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<p className={styles.title}>
				Либо свяжитесь с нами через простую форму. Наша команда ответит
				вам в кратчайшие сроки:
			</p>
			<textarea
				className={styles.textarea}
				placeholder='Оставьте ваши контакты и любые пожелания здесь...'
				{...register('textareaMessage', {
					required: 'Заполните поле перед отправкой!',
				})}
			></textarea>
			{errors.textareaMessage?.type === 'required' && (
				<p className={styles.error}>{errors.textareaMessage.message}</p>
			)}
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
