"use client";

import Image, { StaticImageData } from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import project1 from "@/assets/projects/project1.jpeg";
import project2 from "@/assets/projects/project2.jpg";
import project3 from "@/assets/projects/project3.jpeg";

type ProjectItem = {
    title: string;
    image?: StaticImageData;
    description: string;
    language: string[];
    depo: string[];
    urlDeployed: string;
};

export default function ProjectCarousel() {
    const projects: ProjectItem[] = [
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        projects.length >= 4
            ? {
                loop: true,
                mode: "free-snap",
                slideChanged(slider) {
                    setCurrentSlide(slider.track.details.rel);
                },
                slides: {
                    perView: 1,
                    spacing: 15,
                },
                breakpoints: {
                    "(min-width: 640px)": {
                        slides: { perView: 2, spacing: 15 },
                    },
                    "(min-width: 1024px)": {
                        slides: { perView: 3, spacing: 15 },
                    },
                },
            }
            : {}
    );

    useEffect(() => {
        if (projects.length >= 4) {
            const interval = setInterval(() => {
                instanceRef.current?.next();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [instanceRef, projects.length]);

    const renderProjectCard = (project: ProjectItem, index: number) => (
        <div
            key={index}
            className="p-2 rounded-2xl shadow-md"
        >
            {project.image ? (
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                />
            ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">
                    Pas d&apos;image
                </div>
            )}
            <div className="mt-4 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description.slice(0, 60)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.language.map((lang, i) => (
                        <span
                            key={i}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col gap-2 text-sm mt-auto">
                    <div className="flex flex-row gap-2">
                        {project.depo.map((repoUrl, i) => (
                            <a
                                key={i}
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Code Source {project.depo.length > 1 ? `#${i + 1}` : ""}
                            </a>
                        ))}
                    </div>
                    {project.urlDeployed && (
                        <a
                            href={project.urlDeployed}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                        >
                            Voir Projet
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-10">Mes Projets</h2>

            {projects.length >= 4 ? (
                <>
                    <div ref={sliderRef} className="keen-slider">
                        {projects.map((project, index) => (
                            <div key={index} className="keen-slider__slide">
                                {renderProjectCard(project, index)}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6 gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                className={`w-3 h-3 rounded-full ${
                                    currentSlide === idx
                                        ? "bg-blue-600"
                                        : "bg-gray-300 hover:bg-gray-400"
                                } transition-colors`}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map(renderProjectCard)}
                </div>
            )}
        </div>
    );
}
