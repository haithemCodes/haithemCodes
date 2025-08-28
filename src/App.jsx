import "./App.css";
import Button from "./components/Button";
import {
  CpuIcon,
  DatabaseIcon,
  MonitorIcon,
  DownloadIcon,
  Linkedin,
  Github,
  MailIcon,
} from "lucide-react";




const projects = [
  {
    title: "Inventory Manager",
    desc: "Cross-platform desktop app for real-time stock tracking, offline-first sync, and advanced reporting.",
    stack: ["Electron", "React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce with Stripe, admin dashboard, and SEO-friendly server-side rendering.",
    stack: ["Laravel", "React", "PostgreSQL"],
    link: "#",
  },
  {
    title: "TaskFlow — Team Tasks",
    desc: "Real-time collaborative task board with WebSockets and role-based access control.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
];

const skills = [
  "React",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Electron.js",
  "TailwindCSS",
  "Docker",
  "CI/CD",
];

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white transition-colors overflow-hidden">
      <div
        className="absolute inset-x-0 z-1 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        id="gradient"
      >
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-84.75 max-w-none -translate-x-1/2 rotate-30 sm:left-[calc(50%-30rem)] sm:h-169.5"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          ></path>
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg backdrop-blur-sm border border-white/10">
            SH
          </div>
          <div>
            <h1 className="text-lg font-semibold">S.Haithem Noureddine</h1>
            <p className="text-sm text-white/70">Full‑Stack Developer</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href="#projects"
            className="text-sm hover:text-cyan-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-cyan-300 transition-colors"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <DownloadIcon size={16} /> Resume
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 relative z-10">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              I build fast, reliable web & desktop apps.
            </h2>
            <p className="mt-4 text-white/80 max-w-xl">
              I'm a Full‑Stack Developer focused on building performant,
              maintainable systems with clean architecture. I ship products
              end-to-end — design, API, database, deployment.
            </p>

            <div className="mt-6 flex gap-3">
              <Button text="View Projects" />

              <a
                href={`mailto:${"haytampop16@gmail.com"}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-sm hover:bg-white/20 transition-all duration-300"
              >
                <MailIcon size={16} /> Contact
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex flex-col items-start cursor-default">
                <span className="text-xs text-white/60">PRIMARY STACK</span>
                <div className="mt-2 flex items-center gap-2">
                  <CpuIcon size={18} className="text-cyan-400" />
                  <span className="text-sm">React · Node</span>
                </div>
              </div>

              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex flex-col items-start cursor-default">
                <span className="text-xs text-white/60">DATABASE</span>
                <div className="mt-2 flex items-center gap-2">
                  <DatabaseIcon size={18} className="text-purple-400" />
                  <span className="text-sm">PostgreSQL</span>
                </div>
              </div>

              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex flex-col items-start cursor-default">
                <span className="text-xs text-white/60">DESKTOP</span>
                <div className="mt-2 flex items-center gap-2">
                  <MonitorIcon size={18} className="text-green-400" />
                  <span className="text-sm">Electron.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-2xl border border-white/20">
              <div className="h-64 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-6">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-sm border border-white/20 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="p-5 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <h4 className="text-lg font-semibold transition-colors">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-xs border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link}
                    className="text-sm text-cyan-300 hover:text-cyan-200 hover:underline transition-colors"
                  >
                    View
                  </a>
                  <div className="text-xs text-white/50">Role: Lead dev</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20">
              <h4 className="font-medium">Get in touch</h4>
              <p className="mt-2 text-sm text-white/70">
                I'm available for freelance and full-time opportunities. Send a
                message and I'll reply within 1–2 business days.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={`mailto:${"haytampop16@gmail.com"}`}
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <MailIcon size={16} /> {"haytampop16@gmail.com"}
                </a>

                <div className="flex gap-3 mt-3">
                  <a
                    href="#"
                    aria-label="Github"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={18} /> GitHub
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <form
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 "
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-sm">Name</label>
              <input
                className="mt-1 w-full rounded-md p-2 bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="Your name"
              />

              <label className="block text-sm mt-4">Email</label>
              <input
                className="mt-1 w-full rounded-md p-2 bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="you@mail.com"
              />

              <label className="block text-sm mt-4">Message</label>
              <textarea
                className="mt-1 w-full rounded-md p-2 bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                rows={5}
                placeholder="How can I help?"
              />

              <div className="mt-4 flex justify-end">
                <Button text="Send Message" />
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
                SH
              </div>
              <div>
                <div className="text-sm font-medium">Settoul Haithem</div>
                <div className="text-xs text-white/50">
                  Full‑Stack Developer
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>© {new Date().getFullYear()} S.Haithem Noureddine</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
