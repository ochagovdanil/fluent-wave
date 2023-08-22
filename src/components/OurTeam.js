import SectionTitle from './SectionTitle';
import ourTeamArray from '../data/OurTeamData';
import OurTeamCard from './OurTeamCard';
import dolphinOne from '../assets/dolphin-1.png';
import dolphinTwo from '../assets/dolphin-2.png';
import useAos from '../hooks/useAos';
import { useState, useRef, useCallback } from 'react';
import OurTeamAvatarDialog from './OurTeamAvatarDialog';

function OurTeam() {
	const [isModalWindowShown, setIsModalWindowShown] = useState(false); // show/hide the avatar modal window
	const avatarDataRef = useRef(null); // used to store the avatar image path and the person's full name

	useAos();

	// open the avatar modal window
	const handleOpen = useCallback(data => {
		avatarDataRef.current = data;
		setIsModalWindowShown(true);
	}, []);

	// open the avatar modal window
	const handleClose = useCallback(() => {
		avatarDataRef.current = null;
		setIsModalWindowShown(false);
	}, []);

	return (
		<section className='our-team'>
			<div className='main-container'>
				<img
					src={dolphinOne}
					alt=''
					className='our-team__dolphin our-team__dolphin--one'
				/>
				<img
					src={dolphinTwo}
					alt=''
					className='our-team__dolphin our-team__dolphin--two'
				/>
				<SectionTitle title='Наша команда' />
				<div className='our-team__container' data-aos='fade-up'>
					{ourTeamArray.map(item => {
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
