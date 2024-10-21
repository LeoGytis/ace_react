import {peopleData} from './peopleData';
import Slider from 'react-slick';
import PersonCard from './PersonCard';

const LandingPagePeople = () => {
	const slideShowSettings = {
		dots: false,
		arrows: false,
		pauseOnHover: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 5,
		centerMode: true, // Enable center mode for spacing
		centerPadding: '40px',
		speed: 5300, // Slower speed for smooth sliding
		autoplaySpeed: 10, // Continuous autoplay without pause
		cssEase: 'linear', // Linear easing for smooth transition
		useTransform: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const reversedSlideShowSettings = {
		...slideShowSettings,
		rtl: true,
	};

	return (
		<section className="relative h-[500px] lg:h-[1000px]">
			<div className="w-[100vw] absolute left-1/2 transform -translate-x-1/2 -mx-[9px]">
				<Slider {...slideShowSettings} className="">
					{peopleData.map((person, index) => (
						<PersonCard
							key={index}
							imageSrc={person.imageSrc}
							name={person.name}
							role={person.role}
							skills={person.skills}
						/>
					))}
				</Slider>
				<Slider {...reversedSlideShowSettings} className="hidden lg:flex">
					{peopleData.map((person, index) => (
						<PersonCard
							key={index}
							imageSrc={person.imageSrc}
							name={person.name}
							role={person.role}
							skills={person.skills}
						/>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default LandingPagePeople;
