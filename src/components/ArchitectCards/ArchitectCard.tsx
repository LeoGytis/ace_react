import React from 'react';
interface ArchitectCardProps {
	imageSrc: string;
	name: string;
	role: string;
	skills: string[];
}

const ArchitectCard: React.FC<ArchitectCardProps> = ({imageSrc, name, role, skills}) => {
	return (
		<article
			className="relative flex flex-col min-h-[400px] min-w-[240px] transform transition-transform duration-300 ease-in-out hover:scale-105 p-5 m-10 rounded-3xl"
			style={{
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className="z-0 flex flex-col flex-1 justify-end text-white">
				<h3 className="text-sm font-medium">{name}</h3>
				<p className="text-xs">{role}</p>
				<div className="flex gap-2 items-start text-xs mt-2">
					{skills.map((skill, index) => (
						<div key={index} className="bg-black bg-opacity-40 rounded-lg p-1.5 px-2 ">
							{skill}
						</div>
					))}
				</div>
			</div>
		</article>
	);
};

export default ArchitectCard;
