import Image from 'next/image';
import ArrowsIcon from '../icons/ArrowsFeature.svg';
import BulbIcon from '../icons/BulbFeature.svg';
import PersonIcon from '../icons/PersonFeature.svg';

interface Feature {
	icon: string;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: ArrowsIcon,
		title: 'Tailored to the AEC industry',
		description:
			'This is not a general platform – Acertip is specifically designed for architects, engineers, and constructors, providing all the necessary tools to work and grow more efficiently.',
	},
	{
		icon: BulbIcon,
		title: 'Knowledge and project base.',
		description:
			'Share experiences, learn from others, showcase your projects, and receive valuable feedback and recognition.',
	},
	{
		icon: PersonIcon,
		title: 'Targeted talent search.',
		description:
			'Companies can quickly find the right specialists by filtering through specific skills and project experience.',
	},
];

const LandingPageFeatures = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center p-20 lg:p-40">
			<h2 className="text-7xl font-semibold text-center text-wrap text-neutral-800 mb-20">
				What Sets Acertip Apart?
			</h2>
			<div className="flex flex-col lg:flex-row gap-10 items-start">
				{features.map((feature, index) => (
					<article key={index} className="flex flex-col flex-1 justify-center p-4 ">
						<Image src={feature.icon} alt="feature_icon" width={48} height={48} className="mb-2" />
						<h3 className="text-xl font-semibold text-neutral-800">{feature.title}</h3>
						<p className="text-wrap text-base font-normal text-slate-600">{feature.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default LandingPageFeatures;
