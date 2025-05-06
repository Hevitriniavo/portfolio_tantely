import Header from "@/components/headers/header";
import About from "@/components/About";

export default function Home() {
    return (
        <main className="bg-white dark:bg-black font-open-sans text-black dark:text-white min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <About />
            </div>
        </main>
    );
}
