export const LandingPageHeader = () => {
	return (
		<header className="flex flex-col gap-4 items-center w-full bg-white max-md:px-5 max-md:py-4 px-8 py-2.5 pb-24">
			<div className="flex items-start self-stretch my-auto w-[109px] mb-24">
				<h1 className="grow text-5xl font-semibold tracking-tight">acertip</h1>
				<span className="self-start text-xs font-bold tracking-normal">TM</span>
			</div>
			<div className=" px-4 py-2 text-sm font-medium leading-loose text-center bg-yellow-200 border border-solid border-black border-opacity-10 rounded-full text-neutral-800">
				We are launching this winter!
				<span className="text-neutral-800">🚀 </span>
			</div>
			<div className="mt-8 text-7xl font-semibold tracking-tighter text-center leading-[72px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
				<h1 className="text-wrap">
					Connect, collaborate, share, learn and grow with architects, engineers, and constructors.
				</h1>
			</div>
		</header>
	);
};

export default LandingPageHeader;
