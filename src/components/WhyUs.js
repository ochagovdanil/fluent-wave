import SectionTitle from './SectionTitle';
import whyUsArray from '../data/WhyUsData';
import WhyUsCard from './WhyUsCard';
import fish from '../assets/fish-5.png';
import useAos from '../hooks/useAos';

function WhyUs() {
	useAos();

	return (
		<section className='why-us'>
			<div className='main-container'>
				<img src={fish} alt='' className='why-us__fish' />
				<SectionTitle title='Почему именно мы?' />
				<div className='why-us__container' data-aos='fade-up'>
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
