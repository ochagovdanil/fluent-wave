import reviewsArray from '@data/ReviewsData';
import ReviewsCard from '../card/ReviewsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

function ReviewsSlider() {
	// custom pagination for Swiper JS
	const pagination = {
		clickable: true,
		renderBullet: function (_, className) {
			return '<span class="' + className + '"></span>';
		},
	};

	return (
		<Swiper modules={[Pagination]} pagination={pagination} autoHeight>
			{reviewsArray.map(item => {
				return (
					<SwiperSlide>
						<ReviewsCard
							key={item.id}
							review={item.review}
							name={item.name}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default ReviewsSlider;
