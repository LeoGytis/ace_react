import React from 'react';
import BenefitSpecialistsItem, {BenefitSpecialistsItemProps} from './BenefitSpecialistsItem';
import Image from 'next/image';
import networkImage from '../../network.jpg';

const benefits: BenefitSpecialistsItemProps[] = [
	{
		title: 'Become visible',
		description:
			'Showcase your projects, challenges, and solutions to companies looking for top talent. Create a detailed profile that highlights your skills and projects, making you stand out in the competitive AEC industry.',
	},
	{
		title: 'Find new job opportunities',
		description:
			'Quickly and efficiently find job offers that match your qualifications and specialization. Companies can view your projects and experience, allowing you to find the right job that aligns with your skills.',
	},
	{
		title: 'Share your experience and knowledge',
		description:
			'Showcase your projects, challenges, and solutions to help other specialists learn from your experience. Contribute to the knowledge base and become a recognized expert in your field.',
	},
	{
		title: 'Expand your professional network',
		description:
			'Connect with other architects, engineers, and constructors, share ideas, and collaborate with top experts in the industry from around the globe.',
	},
	{
		title: 'Learn and grow',
		description:
			'Stay updated on the latest industry innovations, technologies, and trends by engaging with colleagues and experts who continuously share their knowledge on the platform.',
	},
];

const BenefitsSpecialists = () => {
	return (
		<section className="flex overflow-hidden flex-col w-full bg-white max-md:py-24 max-md:max-w-full py-32 px-8 xl:px-6 2xl:px-0">
			<h2 className="text-4xl text-wrap font-semibold tracking-tighter leading-none text-neutral-800 max-md:max-w-full">
				Key Benefits for Specialists:
			</h2>
			<div className="flex flex-wrap gap-8 mt-14 max-w-full w-full">
				<div className="hidden lg:flex flex-1 h-[653px] w-1/2 max-md:w-full rounded-3xl">
					<Image
						src={networkImage}
						alt="Network illustration"
						layout="responsive"
						width={700}
						height={475}
						loading="lazy"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="flex flex-col gap-6 self-start lg:w-1/2 max-md:max-w-full">
					{benefits.map((benefit, index) => (
						<BenefitSpecialistsItem key={index} {...benefit} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsSpecialists;
