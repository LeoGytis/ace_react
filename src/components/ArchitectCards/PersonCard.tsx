import React from 'react';

interface PersonCardProps {
	imageSrc: string;
	name: string;
	role: string;
	skills: string[];
}

const PersonCard: React.FC<PersonCardProps> = ({imageSrc, name, role, skills}) => {
	return (
		<article
			className="flex flex-col min-h-[400px] min-w-[240px] transform transition-transform duration-300 ease-in-out hover:scale-105 p-5 m-10"
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

export default PersonCard;
