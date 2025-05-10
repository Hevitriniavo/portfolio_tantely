import React from "react";
import Image from "next/image";
import type {Row, SkillItem, SkillsKey} from "@/types";
import { backend, frontend, database, others, linguistics } from "@/data";
import * as Progress from "@radix-ui/react-progress";
const skills = {
    frontend: frontend,
    backend: backend,
    database: database,
    others: others
};

export default function Skill() {
    const renderLangue = (skill: SkillItem , index: number) => (
        <div key={index} className="mb-4  pl-4 border-l-1 border-blue-300">
            <div className="flex items-center gap-3 ">
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

    const renderRow = (domain: string, key: SkillsKey) => {
        const rows: Row[] = [];
        const categories = Object.entries(skills[key]);

        const domainRowSpan = categories.reduce((acc, [, items]) => acc + items.length, 0);

        categories.forEach(([category, items], catIndex) => {
            items.forEach((item, i) => {
                rows.push({
                    domain: catIndex === 0 && i === 0 ? domain : null,
                    domainRowSpan: catIndex === 0 && i === 0 ? domainRowSpan : 0,
                    category: i === 0 ? category : null,
                    categoryRowSpan: i === 0 ? items.length : 0,
                    ...item
                });
            });
        });
        return rows;
    };

    const rows = [
        ...renderRow("Frontend", "frontend"),
        ...renderRow("Backend", "backend"),
        ...renderRow("Bases des données", "database"),
        ...renderRow("Autres", "others"),
    ];

    return (
        <section  id="skills"  className="mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold pt-14 text-center mb-6">
                Compétences
            </h2>

            <p className="max-w-3xl mx-auto text-center text-base text-gray-600 dark:text-gray-400 mb-2">
                Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.
            </p>
            <div className="overflow-x-auto p-4">
                <table className="w-full table-auto border-collapse rounded">
                    <thead className="bg-gray-200 dark:bg-[#2c3034] text-gray-700 dark:text-gray-300 ">
                    <tr className="text-center border border-gray-200 dark:border-[#2c3034] ">
                        <th className="px-4 py-6 text-left text-sm font-semibold">Domaine</th>
                        <th className="px-4 py-6 text-left text-sm font-semibold">Catégorie</th>
                        <th className="px-4 py-6 text-left text-sm font-semibold">Technologie</th>
                        <th className="px-4 py-6 text-left text-sm font-semibold">Niveau (%)</th>
                        <th className="px-4 py-6 text-left text-sm font-semibold">Logo</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300">
                    {rows.map((row, idx) => (
                        <tr key={row.label + idx} className=" text-center borderborder-gray-200 dark:border-[#2c3034] ">
                            {row.domain && row.domain !== "Linguistics" && (
                                <td rowSpan={row.domainRowSpan} className="px-4 capitalize py-4 text-sm border border-gray-200 dark:border-[#2c3034]">
                                    {row.domain}
                                </td>
                            )}
                            {row.category && (
                                <td rowSpan={row.categoryRowSpan} className="px-4  py-2 text-sm border border-gray-200 dark:border-[#2c3034]">
                                    {row.category.charAt(0).toUpperCase() + row.category.slice(1)}
                                </td>
                            )}
                            <td className="px-4 py-2 text-sm border border-gray-200 dark:border-[#2c3034] ">{row.label}</td>
                            <td className="px-4 py-2 text-sm border border-gray-200 dark:border-[#2c3034] ">{row.level}%</td>
                            <td className="px-4 py-2 text-sm border border-gray-200 dark:border-[#2c3034] ">
                                {row.image ? (
                                    <Image
                                        src={row.image}
                                        alt={row.label}
                                        className="mx-auto h-[24px] w-[24px] object-contain"
                                    />
                                ) : (
                                    <span>No logo</span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-3">Langues</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {linguistics.languages.map((lang, index) => renderLangue(lang, index))}
                    </div>
                </div>

            </div>
        </section>
    );
}
