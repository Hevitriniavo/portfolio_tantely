import portfolio from "@/assets/projects/portfolio.png";
import nyAnyAminay from "@/assets/projects/ny_any_aminay.png";
import schoolManagement from "@/assets/projects/school_management.png";
import sooatel from "@/assets/projects/sooatel.png";
import kikiAI from "@/assets/projects/kiki_ai.png";
import cleanCIty from "@/assets/projects/clean_city.png";
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
        { label: "Français", level: 55 },
        { label: "Anglais", level: 50 },
    ],
};


export const projects: ProjectItem[] = [
    {
        title: "Portfolio Personnel",
        image: portfolio,
        description: "L’application Portfolio Personnel est un site web moderne que j’ai conçu pour présenter mon parcours, mes compétences et mes projets, en mettant en avant ma passion pour le développement web et le design soigné.",
        language: ["Next.js", "Tailwind CSS", "Typescript"],
        depo: [
            { label: "Frontend", value: "https://github.com/Hevitriniavo/portfolio_tantely" }
        ],
        urlDeployed: "https://portfolio-tantely.vercel.app",
    },
    {
        title: "Clean City",
        image: cleanCIty,
        description: "Clean City est une application de gestion intelligente des déchets, conçue pour améliorer le ramassage, le suivi et l’organisation des poubelles dans une ville.",
        language: ["Symfony", "Tailwind CSS", "Javascript", "Twig"],
        depo: [
            { label: "Fullstack", value: "https://github.com/Hevitriniavo/waste-management-web" }
        ],
        urlDeployed: "",
    },
    {
        title: "Ny Any Aminay",
        image: nyAnyAminay,
        description: "un site Web qui met en valeur la beauté de nos lieux ruraux, tels que la culture, le style de vie et la communauté.",
        language: ["Html", "Css", "Javascript"],
        depo: [
            { label: "Frontend", value: "https://github.com/Hevitriniavo/ny-any-ambala" }
        ],
        urlDeployed: "https://ny-any-ambala.vercel.app",
    },
    {
        title: "Kiki AI !",
        image: kikiAI,
        description: "KIKI AI est une application éducative intelligente conçue pour les enfants et les jeunes curieux. Grâce à l’intelligence artificielle, KIKI AI transforme l’apprentissage en une expérience ludique, interactive et personnalisée.",
        language: ["Reactjs", "Shadcn UI", "Material UI", "Typescript"],
        depo: [
            { label: "Frontend", value: "https://github.com/Hevitriniavo/kids-app" }
        ],
        urlDeployed: "https://kids-app-gamma.vercel.app",
    },
    {
        title: "School Management",
        image: schoolManagement,
        description: "Faciliter la gestion administrative et financière des établissements scolaires en automatisant le suivi des écolages, des paiements des élèves, et la génération des factures et reçus.",
        language: ["Reactjs", "Tailwind css", "Spring boot"],
        depo: [
            { label: "Frontend", value: "https://github.com/Hevitriniavo/school-management-web" },
            { label: "Backend", value: "https://github.com/Hevitriniavo/sxv-api" }
        ],
        urlDeployed: "",
    },
    {
        title: "Sooatel",
        image: sooatel,
        description: "Développement d’une application web de gestion : menus, commandes, réservations, facturation, base de données client/ventes, sécurisation et optimisation.",
        language: ["Reactjs", "Tailwind css", "Spring boot"],
        depo: [
            { label: "Backend", value: "https://github.com/Hevitriniavo/sooatel-api" },
            { label: "Frontend", value: "https://github.com/Hevitriniavo/sooatel-ui" }
        ],
        urlDeployed: "",
    }
];
