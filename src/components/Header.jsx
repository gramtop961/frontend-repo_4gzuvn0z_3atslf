import { Mail, Linkedin, Phone, User } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Header() {
  return (
    <header className="relative w-full text-white">
      {/* Spline space/galaxy cover */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* gradient overlays to improve text contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16),transparent_60%)]" />

        {/* Hero content */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-8 pt-16 md:pb-12">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <User className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Your Name
                </h1>
                <p className="mt-1 text-sm text-violet-200/80">
                  Exploring AI • Machine Learning • Cosmic Interfaces
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
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
        </div>
      </div>

      {/* Divider to transition into content */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
    </header>
  );
}
