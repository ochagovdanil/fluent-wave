import { memo } from 'react';
import styles from './reviews-card.module.scss';

type PropsType = {
	review: string;
	name: string;
};

const ReviewsCard = memo(function ({ review, name }: PropsType) {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.triangle}></div>
				<p className={styles.review}>{review}</p>
				<p className={styles.name}>{name}</p>
			</div>
		</div>
	);
});

export default ReviewsCard;
