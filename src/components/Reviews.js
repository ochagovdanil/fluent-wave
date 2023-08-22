import SectionTitle from './SectionTitle';
import ReviewsSlider from './ReviewsSlider';
import fishThree from '../assets/fish-3.png';
import fishFour from '../assets/fish-4.png';
import useAos from '../hooks/useAos';

function Reviews() {
	useAos();

	return (
		<section className='reviews'>
			<div className='main-container'>
				<img
					src={fishThree}
					alt=''
					className='reviews__fish reviews__fish--three'
				/>
				<img
					src={fishFour}
					alt=''
					className='reviews__fish reviews__fish--four'
				/>
				<SectionTitle title='Отзывы учеников' />
				<div className='reviews__slider' data-aos='fade-up'>
					<ReviewsSlider />
				</div>
			</div>
		</section>
	);
}

export default Reviews;
