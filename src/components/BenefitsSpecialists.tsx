import { Benefit } from './BenefitsSection';
import EyeIcon from '@/assets/icons/Eye.svg?url';
import ShareIcon from '@/assets/icons/Share.svg?url';
import FindIcon from '@/assets/icons/Find.svg?url';
import GlobeIcon from '@/assets/icons/Globe.svg?url';
import BrainIcon from '@/assets/icons/Brain.svg?url';

export const benefitsSepcialists: Benefit[] = [
  {
    icon: EyeIcon,
    title: 'Become visible',
    description:
      'Showcase your projects, challenges, and solutions to companies looking for top talent. Create a detailed profile that highlights your skills and projects, making you stand out in the competitive AEC industry.',
  },
  {
    icon: ShareIcon,
    title: 'Share your experience and knowledge',
    description:
      'Showcase your projects, challenges, and solutions to help other specialists learn from your experience. Contribute to the knowledge base and become a recognized expert in your field.',
  },
  {
    icon: FindIcon,
    title: 'Learn and grow',
    description:
      'Stay updated on the latest industry innovations, technologies, and trends by engaging with colleagues and experts who continuously share their knowledge on the platform.',
  },
  {
    icon: GlobeIcon,
    title: 'Expand your professional network',
    description:
      'Connect with other architects, engineers, and constructors, share ideas, and collaborate with top experts in the industry from around the globe.',
  },
  {
    icon: BrainIcon,
    title: 'Find new job opportunities',
    description:
      'Quickly and efficiently find job offers that match your qualifications and specialization. Companies can view your projects and experience, allowing you to find the right job that aligns with your skills.',
  },
];
