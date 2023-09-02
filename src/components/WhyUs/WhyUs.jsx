import whyUsArray from '@data/WhyUsData';
import WhyUsCard from './card/WhyUsCard';
import fish from '@assets/fish-5.png';
import useAos from '@hooks/useAos';
import styles from './why-us.module.scss';

function WhyUs() {
	useAos();

	return (
		<section className={`${styles['why-us']} why-us-scroll`}>
			<div className={`main-container ${styles.div}`}>
				<img src={fish} alt='' className={styles.fish} />
				<h2 className='section-title'>Почему именно мы?</h2>
				<div className={styles.container} data-aos='fade-up'>
					{whyUsArray.map(item => {
						return (
							<WhyUsCard
								key={item.id}
								title={item.title}
								description={item.description}
								icon={item.icon}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default WhyUs;
