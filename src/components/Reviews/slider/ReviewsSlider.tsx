import reviewsArray from '@data/ReviewsData';
import ReviewsCard from '@components/Reviews/card/ReviewsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

type PaginationType = {
	clickable: boolean;
	renderBullet: (_: any, className: string) => string;
};
type ReviewsItem = {
	id: number;
	review: string;
	name: string;
};

function ReviewsSlider() {
	// custom pagination for Swiper JS
	const pagination: PaginationType = {
		clickable: true,
		renderBullet: function (_: any, className: string) {
			return '<span class="' + className + '"></span>';
		},
	};

	return (
		<Swiper modules={[Pagination]} pagination={pagination} autoHeight>
			{reviewsArray.map((item: ReviewsItem) => {
				return (
					<SwiperSlide key={item.id}>
						<ReviewsCard review={item.review} name={item.name} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default ReviewsSlider;
