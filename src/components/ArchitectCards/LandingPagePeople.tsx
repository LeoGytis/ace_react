import { architectsData } from './architectsData';
import ArchitectCard from './ArchitectCard';
import Slider from 'react-slick';

const LandingPagePeople = () => {
  const slideShowSettings = {
    dots: false,
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
    <section>
      <Slider {...slideShowSettings}>
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
      <Slider
        {...reversedSlideShowSettings}
        className="relative hidden lg:flex"
      >
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

export default LandingPagePeople;
