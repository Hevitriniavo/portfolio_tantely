export default function Footer() {
    return (
        <footer className="mt-20 py-10  text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                <ul className="space-y-2 text-center md:text-left text-sm">
                    <li>
                        📧 <a href="mailto:hei.tantely@gmail.com" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">hei.tantely@gmail.com</a>
                    </li>
                    <li>
                        🔗 <a href="https://github.com/Hevitriniavo" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">github.com/Hevitriniavo</a>
                    </li>
                    <li>📍 Antananarivo, lot IPN 61 Ambanilalana </li>

                    <li>📞 +261 38 68 119 50</li>
                </ul>

                <div className="text-sm text-center md:text-right">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">Tantely</span>. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
