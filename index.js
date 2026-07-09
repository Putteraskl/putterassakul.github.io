import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const experience = [
  ["May 2026 — Aug 2026", "Private Equity Summer Analyst", "Blackstone", "Hong Kong SAR", "Investment analysis, due diligence, LBO and valuation modeling, and Asia-Pacific market research."],
  ["Jun 2025 — Aug 2025", "Investment Banking Summer Analyst", "Goldman Sachs", "New York, United States", "Valuation analysis, financial modeling, market research, and transaction-related presentation materials."],
  ["May 2024 — Aug 2024", "Corporate Finance Intern", "Ocean Property Co., Ltd.", "Bangkok, Thailand", "Commercial real estate analysis, project-level returns, market research, and internal reporting."]
];

const education = [
  ["2023 — 2027", "NYU Stern School of Business", "Bachelor’s Degree in Business, Finance"],
  ["2019 — 2023", "Phillips Exeter Academy", "High School Diploma"],
  ["2017 — 2019", "Greenwich Country Day School", "Grade 7–8"],
  ["2008 — 2017", "Bangkok Patana School", "Primary School"]
];

const cities = ["Bangkok", "Hong Kong", "New York"];

function Fade({ children, delay = 0 }) {
  return (
    <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
      viewport={{once:true, margin:"-90px"}} transition={{duration:.7, delay}}>
      {children}
    </motion.div>
  );
}

function Globe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] rounded-full border border-gold/25 shadow-glow">
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-20 rounded-full border border-white/10" />
      <div className="orbit absolute inset-0 rounded-full border border-gold/20" />
      <div className="absolute left-[18%] top-[34%] h-3 w-3 rounded-full bg-gold shadow-[0_0_28px_rgba(201,173,105,.8)]" />
      <div className="absolute right-[22%] top-[44%] h-3 w-3 rounded-full bg-gold shadow-[0_0_28px_rgba(201,173,105,.8)]" />
      <div className="absolute left-[48%] bottom-[22%] h-3 w-3 rounded-full bg-gold shadow-[0_0_28px_rgba(201,173,105,.8)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(201,173,105,.16),transparent_35%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,.08),transparent_32%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-serif text-7xl tracking-[-.08em] text-bone">PA</div>
          <div className="mt-3 text-xs uppercase tracking-[.28em] text-gold">Global Markets</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Pattara Assakul | Finance & Private Equity</title>
        <meta name="description" content="Pattara Assakul — finance student focused on private equity, investment banking, and real estate investment across the U.S. and Asia-Pacific." />
        <meta name="keywords" content="Pattara Assakul, Putter Assakul, private equity, investment banking, finance, NYU Stern" />
        <meta property="og:title" content="Pattara Assakul | Finance & Private Equity" />
        <meta property="og:description" content="Finance, private equity, real estate investment, and Asia-Pacific markets." />
      </Head>

      <main className="min-h-screen gradient-bg overflow-hidden">
        <div className="noise" />

        <header className="fixed top-0 left-0 right-0 z-40">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="glass rounded-full px-5 py-3 flex justify-between text-xs uppercase tracking-[.18em] text-muted">
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
            <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85}}>
              <div className="inline-flex rounded-full border border-line bg-panel/70 px-4 py-2 text-xs uppercase tracking-[.22em] text-gold">
                Finance · Private Equity · Real Estate
              </div>
              <h1 className="font-serif mt-8 text-[18vw] leading-[.82] tracking-[-.09em] md:text-[120px] lg:text-[142px]">
                Pattara<br />Assakul
              </h1>
              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-[#D9D0C2]">
                Building a career in institutional investing across New York, Hong Kong, and Bangkok.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/putterassakul" target="_blank" className="rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm hover:bg-gold/20 transition">
                  LinkedIn <ArrowUpRight className="inline ml-1 h-4 w-4" />
                </a>
                <a href="#experience" className="rounded-full border border-line bg-panel/70 px-6 py-3 text-sm hover:border-gold/60 transition">
                  View Experience
                </a>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.85,delay:.15}}>
              <Globe />
              <div className="mt-8 grid grid-cols-3 gap-3">
                {cities.map(city => (
                  <div key={city} className="glass rounded-2xl p-4 text-center text-sm text-muted">
                    <div className="text-bone">{city}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6"><div className="gold-line h-px" /></div>

        <section id="about" className="mx-auto max-w-7xl px-6 py-28">
          <Fade>
            <div className="grid lg:grid-cols-[.35fr_.65fr] gap-10">
              <h2 className="text-sm uppercase tracking-[.22em] text-gold">About</h2>
              <p className="text-2xl md:text-3xl leading-relaxed text-[#D9D0C2]">
                A finance-focused personal site without a headshot: built around identity, geography,
                timeline, and investment interests rather than photography.
              </p>
            </div>
          </Fade>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <Fade><h2 className="mb-12 text-sm uppercase tracking-[.22em] text-gold">Experience</h2></Fade>
          <div className="space-y-5">
            {experience.map(([date, role, company, location, text], i) => (
              <Fade key={company} delay={i*.06}>
                <div className="grid md:grid-cols-[220px_1fr] gap-6 rounded-[28px] border border-line bg-panel/58 p-7 hover:border-gold/50 transition">
                  <div className="text-sm uppercase tracking-[.12em] text-gold">{date}</div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <h3 className="text-2xl tracking-[-.03em]">{role} · {company}</h3>
                      <span className="flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" /> {location}</span>
                    </div>
                    <p className="mt-4 max-w-3xl leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <Fade><h2 className="mb-12 text-sm uppercase tracking-[.22em] text-gold">Education</h2></Fade>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map(([date, school, desc], i) => (
              <Fade key={school} delay={i*.05}>
                <div className="rounded-[28px] border border-line bg-panel/58 p-7 min-h-[170px] hover:border-gold/50 transition">
                  <div className="text-sm uppercase tracking-[.12em] text-gold">{date}</div>
                  <h3 className="mt-5 text-2xl tracking-[-.03em]">{school}</h3>
                  <p className="mt-3 text-muted">{desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <Fade><h2 className="mb-12 text-sm uppercase tracking-[.22em] text-gold">Focus Areas</h2></Fade>
          <div className="grid md:grid-cols-3 gap-4">
            {["Private Equity","Investment Banking","Real Estate Finance","Valuation","M&A","Asia-Pacific Markets"].map((x,i)=>(
              <Fade key={x} delay={i*.04}>
                <div className="rounded-[26px] border border-line bg-panel/58 p-7 text-xl hover:border-gold/50 hover:-translate-y-1 transition">{x}</div>
              </Fade>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-28 border-t border-line">
          <Fade>
            <div className="glass rounded-[34px] p-8 md:p-12">
              <h2 className="text-sm uppercase tracking-[.22em] text-gold">Contact</h2>
              <p className="mt-8 max-w-3xl text-3xl md:text-5xl font-serif tracking-[-.05em] leading-tight">
                Open to finance, investing, and Asia-Pacific market conversations.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/putterassakul" target="_blank" className="rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm hover:bg-gold/20 transition">LinkedIn</a>
                <a href="mailto:putter@example.com" className="rounded-full border border-line bg-panel px-6 py-3 text-sm hover:border-gold/60 transition"><Mail className="inline mr-2 h-4 w-4" /> Email</a>
              </div>
            </div>
          </Fade>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted border-t border-line">
          © 2026 Pattara Assakul. No-photo personal brand website.
        </footer>
      </main>
    </>
  );
}
