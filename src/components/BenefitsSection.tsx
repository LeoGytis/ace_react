import Image from 'next/image';

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  imageUrl: string;
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  imageUrl,
  benefits,
}) => {
  return (
    <section className="w-full flex flex-col px-8 lg:px-40 py-20">
      <h2 className="text-4xl text-wrap font-semibold text-neutral-800 pb-14">
        {title}
      </h2>
      <div className="w-full flex gap-12">
        <div className="w-1/2 hidden lg:flex flex-1">
          <Image
            src={imageUrl}
            alt="benefits_illustration"
            width={535}
            height={570}
            loading="lazy"
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between border-t border-grey3 pt-6">
          {benefits.map((benefit, index) => (
            <article
              className="w-full h-full flex md:justify-start justify-center items-start gap-4 border-b border-grey3 pb-6"
              key={index}
            >
              <Image
                src={benefit.icon}
                alt="article_icon"
                width={24}
                height={24}
                className="mt-0.5"
              />
              <div className="flex flex-col gap-2">
                <h3 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full text-xl text-neutral-800  font-semibold">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm text-wrap font-normal leading-6 text-slate-500 max-md:max-w-full">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
