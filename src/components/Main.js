import TopButton from './TopButton/TopButton';
import Navbar from './Nav/Navbar';
import Header from './Header/Header';
import headerToWhyUsWave from '../assets/main-why-us.jpg';
import whyUsToServices from '../assets/why-us-services.jpg';
import servicesToOurTeam from '../assets/services-our-team.jpg';
import outTeamToReviews from '../assets/our-team-reviews.jpg';
import reviewsToFooter from '../assets/reviews-footer.jpg';
import WhyUs from './WhyUs/WhyUs';
import Services from './Services/Services';
import OurTeam from './OurTeam/OurTeam';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';

function Main() {
	return (
		<div className='main'>
			<TopButton />
			<Navbar />
			<Header />
			<div
				className='section-transition'
				style={{ backgroundImage: `url(${headerToWhyUsWave})` }}
			></div>
			<WhyUs />
			<div
				className='section-transition'
				style={{ backgroundImage: `url(${whyUsToServices})` }}
			></div>
			<Services />
			<div
				className='section-transition'
				style={{ backgroundImage: `url(${servicesToOurTeam})` }}
			></div>
			<OurTeam />
			<div
				className='section-transition'
				style={{ backgroundImage: `url(${outTeamToReviews})` }}
			></div>
			<Reviews />
			<div
				className='section-transition'
				style={{ backgroundImage: `url(${reviewsToFooter})` }}
			></div>
			<Footer />
		</div>
	);
}

export default Main;
