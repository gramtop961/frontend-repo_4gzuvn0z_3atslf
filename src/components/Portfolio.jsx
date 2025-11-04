import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Plus, Trash2 } from "lucide-react";

function Input({ label, ...props }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-slate-700">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-0 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
      />
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-slate-700">{label}</span>
      <textarea
        {...props}
        className="min-h-[96px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-0 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
      />
    </label>
  );
}

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const storageKey = useMemo(() => "portfolio_items_v1", []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw));
    } catch (_) {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (_) {
      // ignore
    }
  }, [items, storageKey]);

  const addItem = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newItem = {
      id: crypto.randomUUID(),
      title: title.trim(),
      desc: desc.trim(),
      link: link.trim(),
      createdAt: new Date().toISOString(),
    };
    setItems((prev) => [newItem, ...prev]);
    setTitle("");
    setDesc("");
    setLink("");
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section id="portfolio" className="mx-auto max-w-6xl bg-white px-4 py-12 text-slate-900 md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Portfolio
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Log your builds and experiments. Your list saves in the browser.
          </p>
        </div>
        <div className="md:col-span-2">
          <form onSubmit={addItem} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="Title"
                placeholder="e.g., Servo Arm Kinematics"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                label="Project Link (optional)"
                placeholder="https://github.com/username/repo or demo URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <TextArea
                label="Short Description"
                placeholder="What did you build? Sensors, control, perception, UI?"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-cyan-300 bg-cyan-50 px-4 py-2 text-cyan-700 hover:bg-cyan-100"
            >
              <Plus className="h-4 w-4" /> Add Project
            </button>
          </form>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {items.length === 0 && (
              <div className="col-span-full rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
                No projects yet. Add your first above!
              </div>
            )}
            {items.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {item.desc}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800"
                    >
                      <ExternalLink className="h-4 w-4" /> View
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">No link</span>
                  )}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="inline-flex items-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
