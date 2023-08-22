import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

const WhyUsCard = memo(function ({ title, description, icon }) {
	return (
		<div className='why-us__card'>
			<FontAwesomeIcon icon={icon} className='why-us__icon' />
			<p className='why-us__title'>{title}</p>
			<p className='why-us__description'>{description}</p>
		</div>
	);
});

export default WhyUsCard;
