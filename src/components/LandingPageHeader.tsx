import RocketIcon from '../icons/Rocket.svg';

export const LandingPageHeader = () => {
	return (
		<header className="flex flex-col gap-4 items-center max-md:px-5 max-md:py-4 pt-24 pb-32">
			<div className="flex gap-2 text-sm font-medium leading-loose text-center bg-[#F8EE84] border rounded-full px-4 py-2">
				We are launching this winter!
				<img src={RocketIcon} alt="rocket_icon" />
			</div>
			<div className="text-[#111111] text-7xl font-semibold text-center tracking-tighter leading-[72px] max-md:text-4xl max-md:leading-10 mt-8">
				Connect, collaborate, share, learn and grow with architects, engineers, and constructors.
			</div>
		</header>
	);
};

export default LandingPageHeader;
