import {Benefit} from './BenefitsSection';
import FindIcon from '../icons/Find.svg';
import ShowcaseIcon from '../icons/Showcase.svg';
import ClockIcon from '../icons/Clock.svg';
import AwardIcon from '../icons/Award.svg';

export const benefitsCompanies: Benefit[] = [
	{
		icon: FindIcon,
		title: 'Find the right specialists',
		description:
			'Companies can quickly find and review qualified professionals based on their experience and completed projects. Optimize your recruitment process to discover talents that meet your specific needs.',
	},
	{
		icon: ShowcaseIcon,
		title: 'Showcase your projects',
		description:
			'Present your ongoing and completed projects and attract the best specialists who can help your team achieve ambitious goals.',
	},
	{
		icon: ClockIcon,
		title: 'Save time and resources',
		description:
			"Use the platform's integrated tools to manage projects and talent acquisition more efficiently, reducing the time spent on recruitment and personnel management.",
	},
	{
		icon: AwardIcon,
		title: 'Contribute to industry improvement',
		description:
			"Share your project experiences, learn from others, and strengthen your company's position in the industry by building long-term relationships with skilled professionals.",
	},
];
