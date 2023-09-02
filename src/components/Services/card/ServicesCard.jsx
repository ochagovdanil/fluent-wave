import { memo } from 'react';
import styles from './services-card.module.scss';

const ServicesCard = memo(function ({ title, description, price, src }) {
	return (
		<div className={styles.card}>
			<div className={styles.triangle}></div>
			<img src={src} alt='' className={styles.image} />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<p className={styles.price}>
				{price}&#8381;
				<span className={styles['price--per-hour']}>/час</span>
			</p>
		</div>
	);
});

export default ServicesCard;
