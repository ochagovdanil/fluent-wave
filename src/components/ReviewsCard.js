import { BearSlideCard } from 'bear-react-carousel';
import { memo } from 'react';

const ReviewsCard = memo(function ({ review, name }) {
	return (
		<BearSlideCard>
			<div className='reviews__item'>
				<div className='reviews__triangle'></div>
				<p className='reviews__review'>{review}</p>
				<p className='reviews__name'>{name}</p>
			</div>
		</BearSlideCard>
	);
});

export default ReviewsCard;
