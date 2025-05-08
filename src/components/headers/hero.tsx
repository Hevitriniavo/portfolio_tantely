"use client";

import Image from "next/image";
import me from "@/assets/me.jpeg";
import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <section id="accueil" className="flex flex-col md:flex-row items-center mt-16 justify-between gap-10 px-6 pt-28 md:pt-48 pb-12">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white font-geist-sans leading-tight">
                    Hevitriniavo
                    <br />
                    <span className="text-blue-400 lowercase">
                        Andrianstilavoandalana Tantely
                    </span>
                </h1>
                <hr className="border-t-2 border-blue-300 w-24 mx-auto md:mx-0" />
                <div className="text-lg sm:text-md md:text-xl font-medium text-gray-700 dark:text-gray-300 h-[50px]">
                    <Typewriter
                        options={{
                            strings: [
                                "Bienvenue sur mon portfolio !",
                                "Je suis un développeur fullstack passionné.",
                                "Je souhaite travailler avec JavaScript, TypeScript, PHP et Java.",
                                "Je suis actuellement à la recherche d’un stage ou d’une alternance.",
                                "Je suis en 3ᵉ année du parcours Écosystèmes Logiciels.",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <a href="#contact" className="bg-gray-600  hover:cursor-pointer hover:bg-gray-800 text-white px-6 py-2 rounded shadow">
                        Contactez-moi
                    </a>
                    <a
                        href="/assets/tantely-cv.pdf"
                        target="_blank"
                        className="bg-blue-300 hover:cursor-pointer hover:bg-blue-400 text-black font-semibold px-6 py-2 rounded shadow">
                        Voir le CV
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative rounded-full shadow-xl animate-pulse-blue transition-all duration-500">
                    <Image
                        src={me}
                        alt="Photo de Tantely"
                        width={300}
                        height={300}
                        className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
