import React from 'react';
import BenefitCard from './BenefitCompaniesCard';
import companiesImage from '../../images/companies.jpg';
// import Image from 'next/image';

interface BenefitCompaniesCardProps {
	title: string;
	description: string;
}

const benefits: BenefitCompaniesCardProps[] = [
	{
		title: 'Find the right specialists',
		description:
			'Companies can quickly find and review qualified professionals based on their experience and completed projects. Optimize your recruitment process to discover talents that meet your specific needs.',
	},
	{
		title: 'Showcase your projects',
		description:
			'Present your ongoing and completed projects and attract the best specialists who can help your team achieve ambitious goals.',
	},
	{
		title: 'Save time and resources',
		description:
			"Use the platform's integrated tools to manage projects and talent acquisition more efficiently, reducing the time spent on recruitment and personnel management.",
	},
	{
		title: 'Contribute to industry improvement',
		description:
			"Share your project experiences, learn from others, and strengthen your company's position in the industry by building long-term relationships with skilled professionals.",
	},
];

const BenefitsCompanies = () => {
	return (
		<section className="flex overflow-hidden flex-col w-full bg-white max-md:py-24 max-md:max-w-full py-32 px-8 xl:px-6 2xl:px-0">
			<h2 className="text-4xl text-wrap font-semibold tracking-tighter leading-none text-neutral-800 max-md:max-w-full">
				Key Benefits for Companies:
			</h2>
			<div className="flex flex-wrap gap-8 mt-14 max-w-full w-full">
				<div className="hidden lg:flex flex-1 h-[653px] w-1/2 max-md:w-full rounded-3xl">
					<img
						src={companiesImage}
						alt="Network illustration"
						width={700}
						height={475}
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="flex flex-col gap-6 self-start lg:w-1/2 max-md:max-w-full">
					{benefits.map((benefit, index) => (
						<BenefitCard key={index} title={benefit.title} description={benefit.description} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsCompanies;
