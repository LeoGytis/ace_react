import BagIcon from '@/app/icons/BagIcon';
import React from 'react';

export interface BenefitSpecialistsItemProps {
	title: string;
	description: string;
}

const BenefitSpecialistsItem: React.FC<BenefitSpecialistsItemProps> = ({title, description}) => {
	return (
		<article className="flex flex-col justify-center w-full rounded-lg max-md:max-w-full">
			<div className="flex flex-wrap gap-2 justify-center items-center w-full text-xl font-semibold leading-tight text-neutral-800 max-md:max-w-full">
				<BagIcon className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
				<h3 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">{title}</h3>
			</div>
			<p className="mt-1.5 text-sm text-wrap leading-6 text-slate-600 max-md:max-w-full">{description}</p>
		</article>
	);
};

export default BenefitSpecialistsItem;
