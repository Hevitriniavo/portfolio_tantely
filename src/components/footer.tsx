export default function Footer() {
    return (
        <footer className=" py-6mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm  text-center w-full">&copy; {new Date().getFullYear()} Tantely. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
