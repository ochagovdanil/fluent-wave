import { memo } from 'react';

const SectionTransition = memo(function ({ image }) {
	return (
		<div
			className='section-transition'
			style={{ backgroundImage: `url(${image})` }}
		></div>
	);
});

export default SectionTransition;
