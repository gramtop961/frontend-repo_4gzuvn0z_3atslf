export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 text-white md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            About Me
          </h2>
          <p className="mt-2 text-sm text-white/70">
            A robotics-inclined builder crafting playful, interactive systems.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="leading-relaxed text-white/90">
              I explore the intersection of robotics, computer vision, and human
              interfaces. From perception to control, I enjoy shipping end-to-end
              prototypes that feel smooth, responsive, and a little bit alive.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
              <li>Motion & control: PID, trajectory planning basics</li>
              <li>Perception: classical CV + deep learning for detection/pose</li>
              <li>Interactive UIs with real-time 3D and web graphics</li>
              <li>Tooling: Python, PyTorch, OpenCV, JS/TS, React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
