import TopButton from '@components/TopButton/TopButton';
import Navbar from '@components/Nav/Navbar';
import Header from '@components/Header/Header';
import headerToWhyUsWave from '@assets/main-why-us.jpg';
import whyUsToServices from '@assets/why-us-services.jpg';
import servicesToOurTeam from '@assets/services-our-team.jpg';
import outTeamToReviews from '@assets/our-team-reviews.jpg';
import reviewsToFooter from '@assets/reviews-footer.jpg';
import WhyUs from '@components/WhyUs/WhyUs';
import Services from '@components/Services/Services';
import OurTeam from '@components/OurTeam/OurTeam';
import Reviews from '@components/Reviews/Reviews';
import Footer from '@components/Footer/Footer';

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
