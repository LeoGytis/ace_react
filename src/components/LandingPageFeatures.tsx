import React from 'react';

interface Feature {
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		title: 'Tailored to the AEC industry',
		description:
			'This is not a general platform – Acertip is specifically designed for architects, engineers, and constructors, providing all the necessary tools to work and grow more efficiently.',
	},
	{
		title: 'Knowledge and project base:',
		description:
			'Share experiences, learn from others, showcase your projects, and receive valuable feedback and recognition.',
	},
	{
		title: 'Targeted talent search',
		description:
			'Companies can quickly find the right specialists by filtering through specific skills and project experience.',
	},
];

const LandingPageFeatures = () => {
	return (
		<section className="flex overflow-hidden flex-col justify-center items-center py-36 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
			<h2 className="text-4xl font-semibold tracking-tighter leading-none text-center text-neutral-800 w-full max-md:max-w-full mb-10">
				What Sets Acertip Apart?
			</h2>
			<div className="flex flex-wrap gap-10 items-start max-w-full w-full">
				{features.map((feature, index) => (
					<article
						key={index}
						className="flex flex-col flex-1 shrink justify-center p-4 bg-gray-100 rounded-lg basis-0 min-w-[240px]"
					>
						<h3 className="text-xl font-semibold leading-tight text-neutral-800">{feature.title}</h3>
						<p className="text-wrap mt-2 text-base leading-7 text-slate-600">{feature.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default LandingPageFeatures;
