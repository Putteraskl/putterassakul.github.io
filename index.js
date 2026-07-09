import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const experience = [
  {
    year: "May 2026 — Aug 2026",
    role: "Private Equity Summer Analyst",
    company: "Blackstone",
    location: "Hong Kong SAR",
    text: "Evaluating investment opportunities across Asia-Pacific markets, supporting due diligence, financial modeling, and investment committee materials."
  },
  {
    year: "Jun 2025 — Aug 2025",
    role: "Investment Banking Summer Analyst",
    company: "Goldman Sachs",
    location: "New York, United States",
    text: "Supported valuation analysis, transaction materials, market research, and financial modeling for client-facing work."
  },
  {
    year: "May 2024 — Aug 2024",
    role: "Corporate Finance Intern",
    company: "Ocean Property Co., Ltd.",
    location: "Bangkok, Thailand",
    text: "Assisted with commercial real estate analysis, project-level returns, office leasing research, and internal reporting."
  }
];

const education = [
  ["2023 — 2027", "NYU Stern School of Business", "Bachelor’s Degree in Business, Finance"],
  ["2019 — 2023", "Phillips Exeter Academy", "High School Diploma"],
  ["2017 — 2019", "Greenwich Country Day School", "Grade 7–8"],
  ["2008 — 2017", "Bangkok Patana School", "Primary School"]
];

const focus = [
  "Private Equity",
  "Investment Banking",
  "Real Estate Finance",
  "M&A",
  "Valuation",
  "Asia-Pacific Markets"
];

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Pattara Assakul | Finance & Private Equity</title>
        <meta
          name="description"
          content="Pattara Assakul — finance student focused on private equity, investment banking, and real estate investment across the U.S. and Asia-Pacific."
        />
        <meta name="keywords" content="Pattara Assakul, Putter Assakul, finance, private equity, investment banking, NYU Stern" />
        <meta property="og:title" content="Pattara Assakul | Finance & Private Equity" />
        <meta property="og:description" content="Finance student focused on private equity, investment banking, and real estate investment." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen gradient-bg overflow-hidden">
        <div className="noise" />

        <header className="fixed top-0 left-0 right-0 z-40">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="glass rounded-full px-5 py-3 flex items-center justify-between text-xs tracking-[0.18em] uppercase text-muted">
              <a href="#" className="hover:text-gold transition">Pattara Assakul</a>
              <nav className="hidden md:flex gap-7">
                <a href="#experience" className="hover:text-gold transition">Experience</a>
                <a href="#education" className="hover:text-gold transition">Education</a>
                <a href="#contact" className="hover:text-gold transition">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen flex items-center pt-28">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.08fr_.92fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
            >
              <div className="inline-flex rounded-full border border-line bg-panel/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold">
                Finance · Private Equity · Real Estate
              </div>

              <h1 className="font-serif mt-8 text-[17vw] leading-[0.82] tracking-[-0.09em] md:text-[112px] lg:text-[132px]">
                Pattara<br />Assakul
              </h1>

              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-[#D9D0C2]">
                Building a career in institutional investing across the United States and Asia-Pacific.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/putterassakul"
                  target="_blank"
                  className="group rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm text-bone hover:bg-gold/20 transition"
                >
                  LinkedIn <ArrowUpRight className="inline ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-line bg-panel/70 px-6 py-3 text-sm text-bone hover:border-gold/60 transition"
                >
                  View Experience
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, scale: .96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .85, delay: .15 }}
              className="glass rounded-[34px] p-5 shadow-glow"
            >
              <div className="rounded-[26px] min-h-[470px] border border-white/10 bg-[linear-gradient(135deg,rgba(201,173,105,.18),rgba(255,255,255,.03))] flex items-end p-7">
                <div>
                  <p className="text-sm text-muted leading-relaxed">
                    Add your professional headshot by placing a file named
                    <span className="text-bone"> profile.jpg </span>
                    in the public folder, then set this block as a background image.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {["NYU Stern", "PE Focus", "APAC"].map((x) => (
                  <div key={x} className="rounded-2xl border border-line bg-ink/35 p-4">
                    <div className="text-sm text-bone">{x}</div>
                    <div className="mt-1 h-px w-full bg-gold/40" />
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="gold-line h-px" />
        </div>

        <section id="about" className="mx-auto max-w-7xl px-6 py-28">
          <FadeIn>
            <div className="grid lg:grid-cols-[.35fr_.65fr] gap-10">
              <h2 className="text-sm uppercase tracking-[0.22em] text-gold">About</h2>
              <p className="text-2xl md:text-3xl leading-relaxed text-[#D9D0C2]">
                I am a finance student with interests in private equity, investment banking,
                and real estate investment. My work focuses on financial analysis, valuation,
                investment research, and long-term value creation across global and Asia-Pacific markets.
              </p>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <FadeIn>
            <div className="flex items-end justify-between gap-8 mb-12">
              <h2 className="text-sm uppercase tracking-[0.22em] text-gold">Experience</h2>
              <p className="hidden md:block max-w-md text-muted leading-relaxed">
                Selected finance and investment experience.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {experience.map((item, i) => (
              <FadeIn key={item.company} delay={i * .07}>
                <div className="group grid md:grid-cols-[220px_1fr] gap-6 rounded-[28px] border border-line bg-panel/58 p-7 hover:border-gold/50 transition">
                  <div className="text-sm uppercase tracking-[0.12em] text-gold">{item.year}</div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h3 className="text-2xl tracking-[-0.03em]">{item.role} · {item.company}</h3>
                      <span className="flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" /> {item.location}</span>
                    </div>
                    <p className="mt-4 max-w-3xl leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <FadeIn>
            <h2 className="mb-12 text-sm uppercase tracking-[0.22em] text-gold">Education</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map(([year, school, desc], i) => (
              <FadeIn key={school} delay={i * .06}>
                <div className="rounded-[28px] border border-line bg-panel/58 p-7 min-h-[170px] hover:border-gold/50 transition">
                  <div className="text-sm uppercase tracking-[0.12em] text-gold">{year}</div>
                  <h3 className="mt-5 text-2xl tracking-[-0.03em]">{school}</h3>
                  <p className="mt-3 text-muted">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <FadeIn>
            <h2 className="mb-12 text-sm uppercase tracking-[0.22em] text-gold">Focus Areas</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4">
            {focus.map((x, i) => (
              <FadeIn key={x} delay={i * .04}>
                <div className="rounded-[26px] border border-line bg-panel/58 p-7 text-xl hover:border-gold/50 hover:-translate-y-1 transition">
                  {x}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <FadeIn>
            <div className="glass rounded-[34px] p-8 md:p-12">
              <h2 className="text-sm uppercase tracking-[0.22em] text-gold">Contact</h2>
              <p className="mt-8 max-w-3xl text-3xl md:text-5xl font-serif tracking-[-0.05em] leading-tight">
                Open to finance, investing, and Asia-Pacific market conversations.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/putterassakul" target="_blank" className="rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm hover:bg-gold/20 transition">
                  LinkedIn
                </a>
                <a href="mailto:putter@example.com" className="rounded-full border border-line bg-panel px-6 py-3 text-sm hover:border-gold/60 transition">
                  <Mail className="inline mr-2 h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted border-t border-line">
          © 2026 Pattara Assakul. Built with Next.js, Tailwind CSS, and Framer Motion.
        </footer>
      </main>
    </>
  );
}
