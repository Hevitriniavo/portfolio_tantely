import project1 from "@/assets/projects/project1.jpeg";
import project2 from "@/assets/projects/project2.jpg";
import project3 from "@/assets/projects/project3.jpeg";
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
import type {ProjectItem, SkillTree} from "@/types";

export const skills: SkillTree = {
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

export const projects: ProjectItem[] = [
    {
        title: "Portfolio Personnel",
        image: project1,
        description: "Un site personnel pour présenter mes compétences et projets.",
        language: ["React", "Next.js", "Tailwind CSS"],
        depo: [
            "https://github.com/username/portfolio",
            "https://github.com/username/portfolio-api"
        ],
        urlDeployed: "https://portfolio.example.com",
    },
    {
        title: "Gestion de Banque",
        image: project2,
        description: "Application de gestion de comptes bancaires avec Spring Boot.",
        language: ["Java", "Spring Boot", "MySQL"],
        depo: ["https://github.com/username/systembank"],
        urlDeployed: "",
    },
    {
        title: "Blog Personnel",
        image: project3,
        description: "Un blog personnel pour partager mes idées et tutoriels.",
        language: ["React", "Next.js", "Tailwind CSS"],
        depo: ["https://github.com/username/blog"],
        urlDeployed: "https://blog.example.com",
    },
    {
        title: "App de Recettes",
        image: project3,
        description: "Une application de gestion de recettes de cuisine.",
        language: ["React", "TypeScript", "Firebase"],
        depo: ["https://github.com/username/recettes"],
        urlDeployed: "https://recettes.example.com",
    },
];
