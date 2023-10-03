import { memo } from 'react';
import styles from './our-team-card.module.scss';

type PropsType = {
	roundSrc: string;
	fullSrc: string;
	fullname: string;
	position: string;
	emoji: number;
	openAvatar: (data: { fullSrc: string; alt: string }) => void;
};

const OurTeamCard = memo(function ({
	roundSrc,
	fullSrc,
	fullname,
	position,
	emoji,
	openAvatar,
}: PropsType) {
	return (
		<div
			className={styles.card}
			onClick={() => openAvatar({ fullSrc, alt: fullname })}
		>
			<img src={roundSrc} alt={fullname} className={styles.avatar} />
			<div className={styles.info}>
				<p className={styles.fullname}>{fullname}</p>
				<p className={styles.position}>
					{position} {String.fromCodePoint(emoji)}
				</p>
			</div>
		</div>
	);
});

export default OurTeamCard;
