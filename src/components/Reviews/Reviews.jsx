import ReviewsSlider from './slider/ReviewsSlider';
import fishThree from '@assets/fish-3.png';
import fishFour from '@assets/fish-4.png';
import useAos from '@hooks/useAos';
import styles from './reviews.module.scss';

function Reviews() {
	useAos();

	return (
		<section className={`${styles.reviews} reviews-scroll`}>
			<div className={`main-container ${styles.div}`}>
				<img
					src={fishThree}
					alt=''
					className={`${styles.fish} ${styles['fish--three']}`}
				/>
				<img
					src={fishFour}
					alt=''
					className={`${styles.fish} ${styles['fish--four']}`}
				/>
				<h2 className={`section-title ${styles.h2}`}>
					Отзывы учеников
				</h2>
				<div className={styles.slider} data-aos='fade-up'>
					<ReviewsSlider />
				</div>
			</div>
		</section>
	);
}

export default Reviews;
