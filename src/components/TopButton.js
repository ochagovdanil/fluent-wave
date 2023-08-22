import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function TopButton() {
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	// show/hide the Top Button
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY >= 200) setIsButtonVisible(true);
			else setIsButtonVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// scroll to the top of the page
	function handleClick() {
		window.scrollTo(0, 0);
	}

	return (
		<>
			{isButtonVisible && (
				<button className='top-button' onClick={handleClick}>
					<FontAwesomeIcon
						icon={faChevronUp}
						className='top-button__icon'
					/>
				</button>
			)}
		</>
	);
}

export default TopButton;
