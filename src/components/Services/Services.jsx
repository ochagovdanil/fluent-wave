import { servicesGroupList, servicesIndividualList } from '@data/ServicesData';
import ServicesCard from './card/ServicesCard';
import { useState } from 'react';
import fishOne from '@assets/fish-1.png';
import fishTwo from '@assets/fish-2.png';
import useAos from '@hooks/useAos';
import styles from './services.module.scss';

function Services() {
	const [isIndividualTab, setIsIndividualTab] = useState(true); // which tab to show
	const servicesList = isIndividualTab
		? servicesIndividualList
		: servicesGroupList; // which array to map through

	useAos();

	function handleIndividualTab() {
		if (!isIndividualTab) setIsIndividualTab(!isIndividualTab);
	}

	function handleGroupTab() {
		if (isIndividualTab) setIsIndividualTab(!isIndividualTab);
	}

	return (
		<section className={`${styles.services} services-scroll`}>
			<div className={`main-container ${styles.div}`}>
				<img
					src={fishOne}
					alt=''
					className={`${styles.fish} ${styles['fish--one']}`}
				/>
				<img
					src={fishTwo}
					alt=''
					className={`${styles.fish} ${styles['fish--two']}`}
				/>
				<h2 className='section-title'>Наши тарифы</h2>
				<div className={styles.tabs}>
					<button
						className={`${styles['tab-item']} ${
							isIndividualTab
								? styles['tab-item--active']
								: styles['tab-item--disabled']
						}`}
						onClick={handleIndividualTab}
					>
						Индивидуальные
					</button>
					<button
						className={`${styles['tab-item']} ${
							!isIndividualTab
								? styles['tab-item--active']
								: styles['tab-item--disabled']
						}`}
						onClick={handleGroupTab}
					>
						Групповые
					</button>
				</div>
				<div className={styles.container} data-aos='fade-up'>
					{servicesList.map(item => {
						return (
							<ServicesCard
								key={item.id}
								title={item.title}
								description={item.description}
								price={item.price}
								src={item.src}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Services;
