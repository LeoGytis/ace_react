'use client';
import React from 'react';
import {architectsData} from './architectsData';
import ArchitectCard from './ArchitectCard';
import Slider from 'react-slick';

const ArchitectCardsContainer = () => {
	const slideShowSettings = {
		dots: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 5,
		centerMode: true, // Enable center mode for spacing
		centerPadding: '50px',
		pauseOnHover: true,
		speed: 15000, // Slower speed for smooth sliding
		slidesToScroll: 1,
		autoplaySpeed: 0, // Continuous autoplay without pause
		cssEase: 'linear', // Linear easing for smooth transition
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerPadding: '80px',
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
		<section>
			<Slider {...slideShowSettings} className="relative">
				{architectsData.map((architect, index) => (
					<ArchitectCard
						key={index}
						imageSrc={architect.imageSrc}
						name={architect.name}
						role={architect.role}
						skills={architect.skills}
					/>
				))}
			</Slider>
			<Slider {...reversedSlideShowSettings} className="relative">
				{architectsData.map((architect, index) => (
					<ArchitectCard
						key={index}
						imageSrc={architect.imageSrc}
						name={architect.name}
						role={architect.role}
						skills={architect.skills}
					/>
				))}
			</Slider>
		</section>
	);
};

export default ArchitectCardsContainer;
