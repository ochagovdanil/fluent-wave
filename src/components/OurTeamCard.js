import { memo } from 'react';

const OurTeamCard = memo(function ({
	roundSrc,
	fullSrc,
	fullname,
	position,
	emoji,
	openAvatar,
}) {
	return (
		<div
			className='our-team__card'
			onClick={() => openAvatar({ fullSrc, alt: fullname })}
		>
			<img src={roundSrc} alt={fullname} className='our-team__avatar' />
			<div className='our-team__info'>
				<p className='our-team__fullname'>{fullname}</p>
				<p className='our-team__position'>
					{position} {String.fromCodePoint(emoji)}
				</p>
			</div>
		</div>
	);
});

export default OurTeamCard;
