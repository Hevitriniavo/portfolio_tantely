"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/themes/mode-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [hash, setHash] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const [liens] = useState([
        { label: "Accueil", id: "accueil" },
        { label: "À propos", id: "a-propos" },
        { label: "Compétences", id: "skills" },
        { label: "Projets", id: "projets" },
        { label: "Contact", id: "contact" },
    ]);

    useEffect(() => {
        const updateHash = (id: string) => {
            console.log("ID", id)
            setHash(`#${id}`);
            window.history.replaceState(null, "", `#${id}`);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        updateHash(id);
                    }
                });
            },
            { threshold: 0.2 }
        );

        liens.forEach((lien) => {
            const element = document.getElementById(lien.id);
            if (element) {
                observer.observe(element);
            }
        });
        return () => {
            observer.disconnect();
        };
    }, [liens]);

    return (
        <nav className="w-full border-b border-blue-300 px-4 py-3 bg-white dark:bg-[#121212] fixed top-0 right-0 left-0 z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-center font-bold italic text-gray-900 dark:text-white">
                    <a href="#accueil">
                        Tantely<span className="text-blue-400">Dev</span>
                    </a>
                </h1>

                <ul className="hidden md:flex space-x-6 items-center">
                    {liens.map((lien) => (
                        <li key={lien.id}>
                            <a
                                href={`#${lien.id}`}
                                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                                    hash === `#${lien.id}`
                                        ? "text-blue-400 underline underline-offset-4"
                                        : "text-gray-700 dark:text-gray-300"
                                }`}
                            >
                                {lien.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-3">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-800 dark:text-gray-100"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="mt-3 flex flex-col space-y-2 md:hidden">
                    {liens.map((lien) => (
                        <li key={lien.id}>
                            <a
                                href={`#${lien.id}`}
                                onClick={() => setIsOpen(false)}
                                className={`block px-2 py-4 text-sm font-medium transition hover:text-blue-400 ${
                                    hash === `#${lien.id}`
                                        ? "text-blue-400 underline underline-offset-4"
                                        : "text-gray-700 dark:text-gray-300"
                                }`}
                            >
                                {lien.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
