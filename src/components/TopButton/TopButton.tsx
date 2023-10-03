import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import styles from './top-button.module.scss';

function TopButton() {
	const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

	// show/hide the Top Button
	useEffect(() => {
		function handleScroll(): void {
			if (window.scrollY >= 200) setIsButtonVisible(true);
			else setIsButtonVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// scroll to the top of the page
	function handleClick(): void {
		window.scrollTo(0, 0);
	}

	return (
		<>
			{isButtonVisible && (
				<button className={styles.button} onClick={handleClick}>
					<FontAwesomeIcon
						icon={faChevronUp}
						className={styles.icon}
					/>
				</button>
			)}
		</>
	);
}

export default TopButton;
