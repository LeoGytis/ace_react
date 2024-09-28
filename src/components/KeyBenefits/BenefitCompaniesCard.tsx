import React from 'react';

interface BenefitCompaniesCardProps {
	title: string;
	description: string;
}

const BenefitCompaniesCard: React.FC<BenefitCompaniesCardProps> = ({title, description}) => {
	return (
		<article className="flex flex-col justify-center w-full rounded-lg max-md:max-w-full">
			<h3 className="text-base font-medium leading-loose text-neutral-800 max-md:max-w-full">{title}</h3>
			<p className="mt-1 text-sm text-wrap font-normal leading-6 text-slate-500 max-md:max-w-full">
				{description}
			</p>
		</article>
	);
};

export default BenefitCompaniesCard;
