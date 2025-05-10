import {
    Mail,
    Linkedin,
    Github,
    MapPin,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 py-10 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <ul className="space-y-2 text-center md:text-left text-sm">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Mail size={16} />
                        <a
                            href="mailto:hei.tantely@gmail.com"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            hei.tantely@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Linkedin size={16} />
                        <a
                            href="https://www.linkedin.com/in/tantely-hevitriniavo-033b67364"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Tantely Hevitriniavo
                        </a>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Github size={16} />
                        <a
                            href="https://github.com/Hevitriniavo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Hevitriniavo
                        </a>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <MapPin size={16} />
                        Antananarivo, lot IPN 61 Ambanilalana
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Phone size={16} />
                        +261 38 68 119 50
                    </li>
                </ul>

                <div className="text-sm text-center md:text-right">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
              Tantely
            </span>
                        . Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
