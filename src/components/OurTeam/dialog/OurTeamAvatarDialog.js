import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import styles from './dialog.module.scss';

const OurTeamAvatarDialog = memo(function ({ fullSrc, alt, onClose }) {
	return (
		<div className={styles.dialog}>
			<FontAwesomeIcon
				icon={faClose}
				className={styles['close-icon']}
				onClick={onClose}
			/>
			<img src={fullSrc} alt={alt} className={styles.image} />
		</div>
	);
});

export default OurTeamAvatarDialog;
