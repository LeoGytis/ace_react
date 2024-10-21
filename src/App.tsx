import './App.css';
import LandingPageFooter from './components/LandingPageFooter';
import LandingPageHeader from './components/LandingPageHeader';
import LandingPageFeatures from './components/LandingPageFeatures';
import LandingPagePeople from './components/ArchitectCards/LandingPagePeople';
import LandingPageDescription from './components/LandingPageDescription';
import BenefitsSection from './components/BenefitsSection';
import {benefitsCompanies} from './components/BenefitsCompanies';
import specialistsImage from './images/specialists.jpg';
import companiesImage from './images/companies.jpg';
import {benefitsSpecialists} from './components/BenefitsSpecialists';

function App() {
	return (
		<div className={` antialiased w-full flex flex-col items-center justify-center bg-white`}>
			<main className="w-full max-w-[1120px] mx-auto flex flex-col">
				<LandingPageHeader />
				<LandingPagePeople />
				<LandingPageDescription />
				<BenefitsSection
					title="Key Benefits for Specialists:"
					imageUrl={specialistsImage}
					benefits={benefitsSpecialists}
				/>
				<BenefitsSection
					title="Key Benefits for Companies:"
					imageUrl={companiesImage}
					benefits={benefitsCompanies}
				/>
				<LandingPageFeatures />
			</main>
			<LandingPageFooter />
		</div>
	);
}

export default App;
