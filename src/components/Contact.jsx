import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 text-white md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Reach out for collaborations, internships, or robotics chat.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-white/60">Email</div>
                <div className="font-medium">your.email@example.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-white/60">LinkedIn</div>
                <div className="font-medium">linkedin.com/in/your-linkedin</div>
              </div>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-white/60">Phone</div>
                <div className="font-medium">+1 (234) 567-890</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
