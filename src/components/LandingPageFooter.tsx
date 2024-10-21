import LogoIcon from '../icons/Logo';

const LandingPageFooter = () => {
	return (
		<footer className="w-full flex flex-col justify-between items-center bg-[#172632] text-grey1">
			<div className="max-w-[1120px] flex flex-col justify-center items-center my-44">
				<h2 className="text-4xl text-wrap font-semibold tracking-tighter leading-10 text-center text-white">
					Contact us at {` `}
					<a href="mailto:info@acertip.com" className="underline">
						info@acertip.com
					</a>
					<br />
					<span className="text-grey1">
						and we&apos;ll keep you informed about the exciting launch of the Acertip platform. Be the first
						to know and get ready to join a global community of AEC professionals.
					</span>
				</h2>
			</div>
			<div className="w-full flex justify-between items-center border-t border-grey3 px-10 p-8 ">
				<div className="text-xs font-semibold text-bottom">@2004. Acertip.</div>
				<LogoIcon width={222} height={46} />
			</div>
		</footer>
	);
};

export default LandingPageFooter;
