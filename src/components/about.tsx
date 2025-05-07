import React from "react";
import Image from "next/image";
import web from "@/assets/web.jpeg";

export default function About() {
    return (
        <div id="a-propos">
            <h2 className="text-3xl font-bold pt-14 text-center mb-6">
                À propos de moi
            </h2>

            <p className="max-w-3xl mx-auto text-center text-base text-gray-600 dark:text-gray-400 mb-2">
                Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours,
                d’autant plus en étant impliqué, curieux et passionné.
            </p>

            <section className="flex items-center justify-center px-4 py-12">
                <div className="rounded-2xl overflow-hidden w-full flex flex-col-reverse md:flex-row">
                    <div className="md:w-1/3 flex justify-center items-center p-6">
                        <Image
                            src={web}
                            alt="Mon image"
                            className="object-cover h-full border-1 border-blue-300 shadow-md"
                        />
                    </div>

                    <div className="md:w-2/3 p-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <p className="max-w-3xl mx-auto text-base text-gray-600 dark:text-gray-400 mb-2">
                            👋 Bonjour, je m&apos;appelle <span className="font-semibold text-blue-600 dark:text-blue-400">Hevitriniavo</span>.
                            Je suis un développeur fullstack passionné par le développement web moderne, tant côté frontend que backend.
                            Actuellement en licence d’Écosystème Logiciel à la{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
                                href="https://hei.school"
                            >
                                Haute École d’Informatique (HEI)
                            </a>, je suis à la recherche d&apos;un stage ou d&apos;une alternance pour mettre en pratique mes compétences en Java, JavaScript, TypeScript, PHP, ainsi que dans des frameworks comme React, Vue, Next, Nuxt, Symfony et Spring Boot.
                        </p>

                        <p className="max-w-3xl mx-auto  text-base text-gray-600 dark:text-gray-400 mb-2">
                            Je maîtrise également des outils tels que Git, Docker, Postman, et je m&apos;intéresse aux bonnes pratiques comme{" "}
                            <span className="italic">les tests, CI/CD, et la sécurité</span>.
                            J&apos;ai déjà développé une application complète pour un restaurant, gérant les menus, les commandes, les réservations et les factures.
                        </p>

                        <p className="max-w-3xl mx-auto text-base text-gray-600 dark:text-gray-400 mb-2">
                            Je suis <span className="font-medium">motivé</span>, <span className="font-medium">autonome</span>, <span className="font-medium">rigoureux</span>, et toujours prêt à apprendre.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
