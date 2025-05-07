import * as Progress from "@radix-ui/react-progress";
import type {SkillItem} from "@/types";
import Image from "next/image";
import {skills} from "@/data";


export default function Skill() {
    const renderSkill = (skill: SkillItem , index: number) => (
        <div key={index} className="mb-4  pl-4 border-l-1 border-blue-300">
            <div className="flex items-center gap-3 ">
                {skill.image && (
                    <Image
                        src={skill.image}
                        alt={skill.label}
                        width={34}
                        height={34}
                        className="rounded object-cover"
                    />
                )}
                <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">
                    {skill.label}
                </span>
            </div>
            <Progress.Root className="relative overflow-hidden bg-gray-200 rounded h-1 mt-1 w-full">
                <Progress.Indicator
                    className="bg-blue-600 h-full transition-all duration-700 ease-in-out"
                    style={{ width: `${skill.level}%` }}
                />
            </Progress.Root>
            <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
        </div>
    );

    const renderSkillsInTwoColumns = (items: SkillItem[]) => {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
                {items.map((skill, index) => renderSkill(skill, index))}
            </div>
        );
    };

    return (
        <div className="mx-auto py-8 px-4" id="competences">
            <h2 className="text-3xl font-bold mb-6 text-center ">
                Mes Compétences
            </h2>

            {Object.entries(skills.informatiques).map(([category, subgroups]) => (
                <div key={category} className="mb-8">
                    <h3 className="text-xl font-semibold  capitalize mb-3">
                        {category}
                    </h3>
                    {Object.entries(subgroups).map(([group, items]) => (
                        <div
                            key={group}
                            className="mb-6"
                        >
                            <h4 className="text-lg font-medium  mb-2 ">
                                {group.at(0)?.toUpperCase() + "" + group.slice(1).toLowerCase()}
                            </h4>
                            {renderSkillsInTwoColumns(items)}
                        </div>
                    ))}
                </div>
            ))}

            <div className="mt-10">
                <h3 className="text-xl font-semibold  mb-3">Langues</h3>
                {renderSkillsInTwoColumns(Object.values(skills.linguistiques))}
            </div>
        </div>
    );
}