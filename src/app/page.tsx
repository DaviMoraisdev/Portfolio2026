import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="site-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} {profile.name}. Desenvolvido com foco em back-end junior.</p>
            <div className="footer-links">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
