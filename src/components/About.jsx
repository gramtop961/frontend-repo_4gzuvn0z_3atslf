export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 text-white md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            About Me
          </h2>
          <p className="mt-2 text-sm text-white/70">
            A quick intro and what I’m exploring right now.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="leading-relaxed text-white/90">
              I’m a student passionate about building intelligent systems and
              learning how to turn data into insight. My current focus is on the
              foundations of Machine Learning and MLOps: data preprocessing,
              model training, evaluation, and deploying models as APIs.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
              <li>Python, NumPy, pandas, scikit-learn basics</li>
              <li>Intro deep learning with PyTorch and TensorFlow</li>
              <li>Experiment tracking and reproducibility</li>
              <li>Clean code, version control, and good research habits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
