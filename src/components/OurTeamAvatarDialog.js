import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const OurTeamAvatarDialog = memo(function ({ fullSrc, alt, onClose }) {
	return (
		<div className='avatar-dialog'>
			<FontAwesomeIcon
				icon={faClose}
				className='avatar-dialog__close-icon'
				onClick={onClose}
			/>
			<img src={fullSrc} alt={alt} className='avatar-dialog__image' />
		</div>
	);
});

export default OurTeamAvatarDialog;
