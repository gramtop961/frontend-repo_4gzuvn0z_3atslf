import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        <div className="mx-auto max-w-6xl px-4">
          © {new Date().getFullYear()} Your Name. Robotic interfaces and playful tech.
        </div>
      </footer>
    </div>
  );
}
