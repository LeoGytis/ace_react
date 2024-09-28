import React from 'react';

const LandingPageContactSection = () => {
	return (
		<section className="flex overflow-hidden flex-col justify-center items-center px-40 py-32 bg-neutral-800 max-md:px-5 max-md:py-24 max-md:max-w-full max-w-[1440px]">
			<h2 className="text-4xl text-wrap font-semibold tracking-tighter leading-10 text-center text-white max-md:max-w-full">
				Contact us at {` `}
				<a href="mailto:info@acertip.com" className="underline">
					info@acertip.com
				</a>
				<br />
				<span className="text-slate-600">
					and we&apos;ll keep you informed about the exciting launch of the Acertip platform. Be the first to
					know and get ready to join a global community of AEC professionals.
				</span>
			</h2>
		</section>
	);
};

export default LandingPageContactSection;
