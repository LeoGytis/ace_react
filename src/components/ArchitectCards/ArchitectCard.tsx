import React from 'react';
import './App.css';
interface ArchitectCardProps {
	imageSrc: string; //StaticImageData
	name: string;
	role: string;
	skills: string[];
}

const ArchitectCard: React.FC<ArchitectCardProps> = ({imageSrc, name, role, skills}) => {
	return (
		<article className="mx-16 my-10">
			<div className="flex relative flex-col self-stretch my-auto rounded-3xl min-h-[400px] min-w-[240px] transform transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform p-2 px-8">
				<img
					src={imageSrc}
					alt={`${name}, ${role}`}
					width={276}
					height={384}
					loading="lazy"
					className="object-cover absolute inset-x-1.5 inset-y-2 z-0 max-w-full rounded-3xl aspect-[0.72] w-full h-full"
				/>
				<div className="flex z-0 flex-col flex-1 justify-end text-white">
					<div className="flex flex-col items-start w-full">
						<div className="flex flex-col">
							<h3 className="text-sm font-medium leading-loose">{name}</h3>
							<p className="text-xs">{role}</p>
						</div>
						<div className="flex gap-2 items-start mt-2 text-xs whitespace-nowrap">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="flex justify-center items-center py-1.5 pr-1.5 pl-3 bg-blend-normal bg-white bg-opacity-20 rounded-[160px]"
								>
									<div className="gap-2 self-stretch pr-1.5 my-auto">{skill}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ArchitectCard;
