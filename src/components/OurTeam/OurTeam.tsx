import ourTeamArray from '@data/OurTeamData';
import OurTeamCard from '@components/OurTeam/card/OurTeamCard';
import dolphinOne from '@assets/dolphin-1.png';
import dolphinTwo from '@assets/dolphin-2.png';
import useAos from '@hooks/useAos';
import { useState, useRef, useCallback } from 'react';
import OurTeamAvatarDialog from '@components/OurTeam/dialog/OurTeamAvatarDialog';
import styles from './our-team.module.scss';

type AvatarDataRefType = { fullSrc: string; alt: string };
type OurTeamItem = {
	id: number;
	roundSrc: string;
	fullSrc: string;
	fullname: string;
	position: string;
	emoji: number;
};

function OurTeam() {
	const [isModalWindowShown, setIsModalWindowShown] =
		useState<boolean>(false); // show/hide the avatar modal window
	const avatarDataRef = useRef<AvatarDataRefType>({} as AvatarDataRefType); // used to store the avatar image path and the person's full name

	useAos();

	// open the avatar modal window
	const handleOpen = useCallback((data: AvatarDataRefType) => {
		avatarDataRef.current = data;
		setIsModalWindowShown(true);
	}, []);

	// open the avatar modal window
	const handleClose = useCallback(() => {
		avatarDataRef.current = {} as AvatarDataRefType;
		setIsModalWindowShown(false);
	}, []);

	return (
		<section className={`${styles['our-team']} our-team-scroll`}>
			<div className={`main-container ${styles.div}`}>
				<img
					src={dolphinOne}
					alt=''
					className={`${styles.dolphin} ${styles['dolphin--one']}`}
					loading='lazy'
				/>
				<img
					src={dolphinTwo}
					alt=''
					className={`${styles.dolphin} ${styles['dolphin--two']}`}
					loading='lazy'
				/>
				<h2 className={`section-title ${styles['h2']}`}>
					Наша команда
				</h2>
				<div className={styles.container} data-aos='fade-up'>
					{ourTeamArray.map((item: OurTeamItem) => {
						return (
							<OurTeamCard
								key={item.id}
								roundSrc={item.roundSrc}
								fullSrc={item.fullSrc}
								fullname={item.fullname}
								position={item.position}
								emoji={item.emoji}
								openAvatar={handleOpen}
							/>
						);
					})}
				</div>
			</div>
			{isModalWindowShown && (
				<OurTeamAvatarDialog
					fullSrc={avatarDataRef.current.fullSrc}
					alt={avatarDataRef.current.alt}
					onClose={handleClose}
				/>
			)}
		</section>
	);
}

export default OurTeam;
