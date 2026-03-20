import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        textAlign: "center",
        padding: "2rem",
        color: "var(--text-secondary)",
        borderTop: "1px solid var(--border)",
        marginTop: "4rem"
      }}>
        <p>&copy; {new Date().getFullYear()} Davi. Desenvolvido com foco no Back-End.</p>
      </footer>
    </>
  );
}
