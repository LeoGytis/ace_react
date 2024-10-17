import './App.css';
import LandingPageFooter from './components/LandingPageFooter';
import LandingPageHeader from './components/LandingPageHeader';
import LandingPageFeatures from './components/LandingPageFeatures';
import LandingPagePeople from './components/ArchitectCards/LandingPagePeople';
import LandingPageDescription from './components/LandingPageDescription';
import BenefitsSection from './components/BenefitsSection';
import {benefitsCompanies} from './components/BenefitsCompanies';
import {benefitsSepcialists} from './components/BenefitsSpecialists';

function App() {
	return (
		<div className={` antialiased w-full flex flex-col items-center justify-center bg-white`}>
			<main className="flex flex-col justify-center w-full text-3xl font-semibold tracking-tight whitespace-nowrap bg-white bg-opacity-90 max-w-[1440px] text-neutral-800 max-md:max-w-full">
				<LandingPageHeader />
				<LandingPagePeople />
				<LandingPageDescription />
				<BenefitsSection
					title="Key Benefits for Specialists:"
					imageUrl="/images/specialists.jpg"
					benefits={benefitsSepcialists}
				/>
				<BenefitsSection
					title="Key Benefits for Companies:"
					imageUrl="/images/companies.jpg"
					benefits={benefitsCompanies}
				/>
				<LandingPageFeatures />
			</main>
			<LandingPageFooter />
		</div>
	);
}

export default App;
