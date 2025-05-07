import Header from "@/components/headers/header";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skill from "@/components/skill";
export default function Home() {
    return (
        <main className="bg-white dark:bg-[#121212] font-open-sans text-black dark:text-white min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <About />
                <Skill />
                <Project />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
