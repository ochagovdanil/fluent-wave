import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import styles from './why-us-card.module.scss';

const WhyUsCard = memo(function ({ title, description, icon }) {
	return (
		<div className={styles.card}>
			<FontAwesomeIcon icon={icon} className={styles.icon} />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
		</div>
	);
});

export default WhyUsCard;
