
import Image, { StaticImageData } from "next/image";
import * as Progress from "@radix-ui/react-progress";

import js from "@/assets/skills/js.png";
import ts from "@/assets/skills/ts.png";
import vue from "@/assets/skills/vue.png";
import react from "@/assets/skills/react.png";
import nextjs from "@/assets/skills/nextjs.png";
import nuxt from "@/assets/skills/nuxt.png";
import vite from "@/assets/skills/vite.jpeg";
import eslint from "@/assets/skills/eslint.png";
import java from "@/assets/skills/java.png";
import php from "@/assets/skills/php.png";
import springboot from "@/assets/skills/springboot.png";
import symfony from "@/assets/skills/symfony.png";
import postgresql from "@/assets/skills/postgresql.png";
import mysql from "@/assets/skills/mysql.png";
import mongodb from "@/assets/skills/mongodb.png";
import git from "@/assets/skills/git.png";
import github from "@/assets/skills/github.png";
import docker from "@/assets/skills/docker.png";
import postman from "@/assets/skills/postman.png";
import jest from "@/assets/skills/jest.png";
import cypress from "@/assets/skills/cypress.jpeg";
import jira from "@/assets/skills/jira.png";

type SkillItem = {
    label: string;
    level: number;
    image?: StaticImageData;
};

type SkillGroup = {
    [subcategory: string]: SkillItem[];
};

type SkillTree = {
    informatiques: {
        frontend: SkillGroup;
        backend: SkillGroup;
        "base de donnée": SkillGroup;
        autre: SkillGroup;
    };
    linguistiques: {
        [lang: string]: SkillItem;
    };
};

const skills: SkillTree = {
    informatiques: {
        frontend: {
            languages: [
                { label: "JavaScript", level: 85, image: js },
                { label: "TypeScript", level: 75, image: ts },
            ],
            frameworks: [
                { label: "Nuxt.js", level: 70, image: nuxt },
                { label: "Next.js", level: 80, image: nextjs },
                { label: "Vue.js", level: 85, image: vue },
                { label: "React.js", level: 80, image: react },
            ],
            tools: [
                { label: "Vite", level: 70, image: vite },
                { label: "ESLint", level: 75, image: eslint },
            ],
        },
        backend: {
            languages: [
                { label: "Java", level: 85, image: java },
                { label: "PHP", level: 80, image: php },
            ],
            frameworks: [
                { label: "Spring Boot", level: 75, image: springboot },
                { label: "Symfony", level: 80, image: symfony },
            ],
            apis: [
                { label: "REST", level: 85 },
                { label: "WebSockets", level: 65 },
            ],
        },
        "base de donnée": {
            sql: [
                { label: "PostgreSQL", level: 80, image: postgresql },
                { label: "MySQL", level: 75, image: mysql },
            ],
            nosql: [{ label: "MongoDB", level: 70, image: mongodb }],
        },
        autre: {
            outils: [
                { label: "Git", level: 85, image: git },
                { label: "GitHub", level: 85, image: github },
                { label: "Docker", level: 70, image: docker },
                { label: "Postman", level: 80, image: postman },
                { label: "OpenAPI", level: 70 },
                { label: "CI/CD", level: 65 },
            ],
            tests: [
                { label: "PHPUnit", level: 70 },
                { label: "Vitest", level: 65 },
                { label: "Jest", level: 75, image: jest },
                { label: "JUnit", level: 70 },
                { label: "Cypress", level: 60, image: cypress },
            ],
            "gestion de projet": [{ label: "JIRA", level: 70, image: jira }],
        },
    },
    linguistiques: {
        malagasy: { label: "Malagasy", level: 100 },
        francais: { label: "Français", level: 70 },
        anglais: { label: "Anglais", level: 50 },
    },
};

export default function Skill() {
    const renderSkill = (skill: SkillItem, index: number) => (
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
        <div className="mx-auto py-8 px-4">
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
