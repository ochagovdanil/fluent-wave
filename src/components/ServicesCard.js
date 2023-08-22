import { memo } from 'react';

const ServicesCard = memo(function ({ title, description, price, src }) {
	return (
		<div className='services__card'>
			<div className='services__triangle'></div>
			<img src={src} alt='' className='services__image' />
			<p className='services__title'>{title}</p>
			<p className='services__description'>{description}</p>
			<p className='services__price'>
				{price}&#8381;
				<span className='services__price--per-hour'>/час</span>
			</p>
		</div>
	);
});

export default ServicesCard;
