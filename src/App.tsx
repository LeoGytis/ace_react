import React from 'react';
import './App.css';
import LandingPageFooter from './components/LandingPageFooter';
import LandingPageHeader from './components/LandingPageHeader';
import ArchitectCardsContainer from './components/ArchitectCards/ArchitectCardsContainer';
import LandingDescription from './components/LandingDescription';
import BenefitsSpecialists from './components/KeyBenefits/BenefitsSpecialists';
import BenefitsCompanies from './components/KeyBenefits/BenefitsCompanies';
import LandingPageFeatures from './components/LandingPageFeatures';

// ${inter.className}
function App() {
	return (
		<body className={` antialiased w-full flex flex-col items-center justify-center bg-white`}>
			<main className="flex flex-col justify-center w-full text-3xl font-semibold tracking-tight whitespace-nowrap bg-white bg-opacity-90 max-w-[1440px] text-neutral-800 max-md:max-w-full">
				<LandingPageHeader />
				<ArchitectCardsContainer />
				<LandingDescription />
				<BenefitsSpecialists />
				<BenefitsCompanies />
				<LandingPageFeatures />
			</main>
			<LandingPageFooter />
		</body>
	);
}

export default App;
