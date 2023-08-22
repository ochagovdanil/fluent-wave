import TopButton from './TopButton';
import Navbar from './Navbar';
import Header from './Header';
import headerToWhyUsWave from '../assets/main-why-us.jpg';
import whyUsToServices from '../assets/why-us-services.jpg';
import servicesToOurTeam from '../assets/services-our-team.jpg';
import outTeamToReviews from '../assets/our-team-reviews.jpg';
import reviewsToFooter from '../assets/reviews-footer.jpg';
import SectionTransition from './SectionTransition';
import WhyUs from './WhyUs';
import Services from './Services';
import OurTeam from './OurTeam';
import Reviews from './Reviews';
import Footer from './Footer';

function Main() {
	return (
		<div className='main'>
			<TopButton />
			<Navbar />
			<Header />
			<SectionTransition image={headerToWhyUsWave} />
			<WhyUs />
			<SectionTransition image={whyUsToServices} />
			<Services />
			<SectionTransition image={servicesToOurTeam} />
			<OurTeam />
			<SectionTransition image={outTeamToReviews} />
			<Reviews />
			<SectionTransition image={reviewsToFooter} />
			<Footer />
		</div>
	);
}

export default Main;
