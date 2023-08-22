import 'bear-react-carousel/dist/index.css';
import BearCarousel from 'bear-react-carousel';
import reviewsArray from '../data/ReviewsData';
import ReviewsCard from './ReviewsCard';

function ReviewsSlider() {
	// prepare the reviews array for the reviews slider
	const sliderData = reviewsArray.map(item => {
		return {
			key: item.id,
			children: <ReviewsCard review={item.review} name={item.name} />,
		};
	});

	return <BearCarousel isEnableLoop isEnableNavButton data={sliderData} />;
}

export default ReviewsSlider;
