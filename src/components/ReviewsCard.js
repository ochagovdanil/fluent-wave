import { memo } from 'react';

const ReviewsCard = memo(function ({ review, name }) {
	return (
		<div className='reviews__item-container'>
			<div className='reviews__item'>
				<div className='reviews__triangle'></div>
				<p className='reviews__review'>{review}</p>
				<p className='reviews__name'>{name}</p>
			</div>
		</div>
	);
});

export default ReviewsCard;
