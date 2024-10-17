import Image from 'next/image';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export const LandingPageHeader = () => {
  return (
    <header className="flex flex-col gap-4 items-center w-full max-md:px-5 max-md:py-4 px-8 py-2.5 pb-24">
      <div className="w-full flex justify-between items-center mb-16">
        <Image src="/logo.svg" alt="Logo" width={101} height={22} />
        <div className="flex gap-4 items-center text-sm font-medium">
          <LoginModal />
          <RegisterModal />
        </div>
      </div>
      <div className=" px-4 py-2 text-sm font-medium leading-loose text-center bg-yellow-200 border border-solid border-black border-opacity-10 rounded-full">
        We are launching this winter!
        <span className="text-neutral-800">🚀 </span>
      </div>
      <div className="mt-8 text-7xl font-semibold tracking-tighter text-center leading-[72px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <h1 className="text-wrap">
          Connect, collaborate, share, learn and grow with architects,
          engineers, and constructors.
        </h1>
      </div>
    </header>
  );
};

export default LandingPageHeader;
