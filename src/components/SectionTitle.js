import { memo } from 'react';

const SectionTitle = memo(function ({ title }) {
	return <h2 className='section-title'>{title}</h2>;
});

export default SectionTitle;
