import { Mail, Linkedin, Phone, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <User className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Your Name
              </h1>
              <p className="text-sm text-white/70">
                Student • Aspiring Machine Learning Engineer
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="#about"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> your.email@example.com
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> linkedin.com/in/your-linkedin
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> +1 (234) 567-890
          </a>
        </div>
      </div>
    </header>
  );
}
