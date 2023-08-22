import SectionTitle from './SectionTitle';
import {
	servicesGroupList,
	servicesIndividualList,
} from '../data/ServicesData';
import ServicesCard from './ServicesCard';
import { useState } from 'react';
import fishOne from '../assets/fish-1.png';
import fishTwo from '../assets/fish-2.png';
import useAos from '../hooks/useAos';

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
		<section className='services'>
			<div className='main-container'>
				<img
					src={fishOne}
					alt=''
					className='services__fish services__fish--one'
				/>
				<img
					src={fishTwo}
					alt=''
					className='services__fish services__fish--two'
				/>
				<SectionTitle title='Наши тарифы' />
				<div className='services__tabs'>
					<button
						className={`services__tab-item ${
							isIndividualTab
								? 'services__tab-item--active'
								: 'services__tab-item--disabled'
						}`}
						onClick={handleIndividualTab}
					>
						Индивидуальные
					</button>
					<button
						className={`services__tab-item ${
							!isIndividualTab
								? 'services__tab-item--active'
								: 'services__tab-item--disabled'
						}`}
						onClick={handleGroupTab}
					>
						Групповые
					</button>
				</div>
				<div className='services__container' data-aos='fade-up'>
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
