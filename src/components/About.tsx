import React from "react";
import Image from "next/image";
import web from "@/assets/web.jpeg";

export default function About() {
    return (
        <section className="flex items-center justify-center px-4 py-12 ">
            <div className="rounded-2xl overflow-hidden w-full flex flex-col-reverse md:flex-row">

                <div className="md:w-1/3 flex justify-center items-center p-6">
                    <Image
                        src={web}
                        alt="mon image"
                        className="object-cover h-full border-1 border-blue-300  shadow-md"
                    />
                </div>

                <div className="md:w-2/3 p-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        À propos de moi
                    </h2>
                    
                    <p>
                        👋 Bonjour, je m'appelle <span
                        className="font-semibold text-blue-600 dark:text-blue-400">Hevitriniavo</span>. Je suis un
                        développeur fullstack passionné par le développement web moderne, aussi bien côté frontend que
                        backend.
                        Actuellement en licence en Écosystème Logiciel à la <a target="_blank"
                                                                               className="underline text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
                                                                               href="https://hei.school">Haute École
                        d’Informatique (HEI)</a>, je cherche un stage ou une alternance pour mettre en pratique mes
                        compétences en Java, JavaScript, TypeScript, PHP, et frameworks comme React, Vue, Next, Nuxt, symfony, spring boot.
                    </p>

                    <p>
                        Je connais également des outils comme Git, Docker, Postman, et je m'intéresse aux bonnes
                        pratiques :
                        <span className="italic"> tests, CI/CD, sécurité</span>. J'ai déjà réalisé une application
                        complète pour un restaurant, gérant menus,
                        commandes, réservations et factures.
                    </p>

                    <p>
                        Je suis <span className="font-medium">motivé</span>, <span
                        className="font-medium">autonome</span>, <span className="font-medium">rigoureux</span>, et
                        toujours prêt à apprendre.
                    </p>
                </div>
            </div>
        </section>
    );
}
