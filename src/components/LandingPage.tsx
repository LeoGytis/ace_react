'use client';
import React from 'react';
import LandingPageHeader from '@/components/landing-page/LandingPageHeader';
import LandingPageFeatures from '@/components/landing-page/LandingPageFeatures';
import LandingPageFooter from '@/components/landing-page/LandingPageFooter';
import { benefitsSepcialists } from './BenefitsSpecialists';
import LandingPagePeople from './ArchitectCards/LandingPagePeople';
import LandingPageDescription from './LandingPageDescription';
import BenefitsSection from './BenefitsSection';
import { benefitsCompanies } from './BenefitsCompanies';

const LandingPage = () => {
  return (
    <>
      <main className="w-full max-w-[1440px] max-md:max-w-full mx-auto flex flex-col justify-center text-3xl font-semibold tracking-tight whitespace-nowrap text-neutral-800 mt-4">
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
    </>
  );
};

export default LandingPage;
