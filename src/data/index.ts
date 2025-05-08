import portfolio from "@/assets/projects/portfolio.png";
import js from "@/assets/skills/js.png";
import ts from "@/assets/skills/ts.png";
import vue from "@/assets/skills/vue.png";
import react from "@/assets/skills/react.png";
import nextjs from "@/assets/skills/nextjs.png";
import nuxt from "@/assets/skills/nuxt.png";
import java from "@/assets/skills/java.png";
import php from "@/assets/skills/php.png";
import springboot from "@/assets/skills/springboot.png";
import symfony from "@/assets/skills/symfony.png";
import postgresql from "@/assets/skills/postgresql.png";
import mysql from "@/assets/skills/mysql.png";
import mongodb from "@/assets/skills/mongodb.png";
import git from "@/assets/skills/git.png";
import github from "@/assets/skills/github.png";
import postman from "@/assets/skills/postman.png";
import jira from "@/assets/skills/jira.png";
import type { ProjectItem } from "@/types";

export const frontend = {
    languages: [
        { label: "JavaScript", level: 85, image: js },
        { label: "TypeScript", level: 75, image: ts },
    ],
    frameworks: [
        { label: "Nuxt.js", level: 60, image: nuxt },
        { label: "Next.js", level: 70, image: nextjs },
        { label: "Vue.js", level: 65, image: vue },
        { label: "React.js", level: 75, image: react },
    ]
};

export const backend = {
    languages: [
        { label: "Java", level: 75, image: java },
        { label: "PHP", level: 75, image: php },
    ],
    frameworks: [
        { label: "Spring Boot", level: 70, image: springboot },
        { label: "Symfony", level: 65, image: symfony },
    ],
    apis: [
        { label: "REST", level: 85 },
        { label: "WebSockets", level: 50 },
    ],
};

export const database = {
    sql: [
        { label: "PostgreSQL", level: 80, image: postgresql },
        { label: "MySQL", level: 75, image: mysql },
    ],
    nosql: [{ label: "MongoDB", level: 60, image: mongodb }],
};

export const others = {
    outils: [
        { label: "Git", level: 80, image: git },
        { label: "GitHub", level: 85, image: github },
        { label: "Postman", level: 80, image: postman }
    ],
    tests: [
        { label: "PHPUnit", level: 50 },
        { label: "JUnit", level: 50 },
    ],
    "gestion de projet": [{ label: "JIRA", level: 30, image: jira }],
};

export const linguistics = {
    languages: [
        { label: "Malagasy", level: 100 },
        { label: "Français", level: 60 },
        { label: "Anglais", level: 50 },
    ],
};


export const projects: ProjectItem[] = [
    {
        title: "Portfolio Personnel",
        image: portfolio,
        description: "Un site personnel pour présenter mes compétences et projets.",
        language: ["Next.js", "Tailwind CSS"],
        depo: [
            "https://github.com/username/portfolio"
        ],
        urlDeployed: "https://portfolio.example.com",
    },
    {
        title: "Kids app",
        image: portfolio,
        description: "Un site personnel pour présenter mes compétences et projets.",
        language: ["Next.js", "Tailwind CSS", "typescript"],
        depo: [
            "https://github.com/username/portfolio"
        ],
        urlDeployed: "https://portfolio.example.com",
    },
    {
        title: "Ny any aminay",
        image: portfolio,
        description: "Un site personnel pour présenter mes compétences et projets.",
        language: ["html", "css", "javascript"],
        depo: [
            "https://github.com/username/portfolio"
        ],
        urlDeployed: "https://portfolio.example.com",
    }
];
