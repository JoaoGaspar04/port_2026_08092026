import '@/portfolio-2026.css';
import { createFileRoute } from '@tanstack/react-router';
import type { CSSProperties } from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { SocialLinks } from '@/components/SocialLinks';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CvModal } from '@/components/CvModal';
import { Hero3D } from '@/components/Hero3D';
import { NAV, PERSON, UI, t } from '@/data/content';
import { LanguageProvider, useLanguage } from '@/i18n/language';
import { usePointerPosition, useRevealSections, useScrollProgress, useSectionTracking } from '@/hooks/usePortfolioMotion';

const SECTION_IDS = NAV.map(({ id }) => id);

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'João Cruz Gaspar — IT Infrastructure' },
    { name: 'description', content: 'Técnico de Suporte Informático / Administrador focado em infraestrutura, sistemas, redes e segurança.' },
    { property: 'og:title', content: 'João Cruz Gaspar — IT Infrastructure' },
    { property: 'og:description', content: 'IT infrastructure, systems, networking and cybersecurity portfolio.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: PortfolioPage,
});

function PortfolioPage() { return <LanguageProvider><Portfolio /></LanguageProvider>; }

function Portfolio() {
  const { lang } = useLanguage();
  const active = useSectionTracking(SECTION_IDS);
  const progress = useScrollProgress();
  const mouse = usePointerPosition();
  const [cvOpen, setCvOpen] = React.useState(false);
  useRevealSections();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const spotlightStyle = {
    '--mx': `${mouse.x}px`,
    '--my': `${mouse.y}px`,
    backgroundImage: `radial-gradient(560px circle at ${mouse.x}px ${mouse.y}px, rgba(34,211,238,0.085), transparent 78%)`,
  } as CSSProperties;

  return <div className="portfolio-shell relative min-h-screen bg-background" style={{ '--scroll-progress': `${progress}%` } as CSSProperties}>
    <div className="portfolio-progress" aria-hidden="true"><span /></div>
    <div className="portfolio-cursor" aria-hidden="true" style={{ left: mouse.x, top: mouse.y }} />
    <div className="pointer-events-none fixed inset-0 z-30" style={spotlightStyle} />
    <Hero3D />

    <div className="portfolio-body mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
      <div className="lg:grid lg:grid-cols-[minmax(300px,38vw)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-24">
        <aside className="portfolio-rail py-16 lg:sticky lg:top-0 lg:h-screen lg:w-full lg:py-16">
          <div className="portfolio-rail-inner lg:flex lg:h-full lg:flex-col lg:justify-between">
            <div>
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="portfolio-avatar h-28 w-28 overflow-hidden rounded-full ring-2 ring-foreground/15 bg-foreground/5">
                  <img src="/profile.jpg" alt={`Fotografia de ${PERSON.name}`} className="h-full w-full object-cover" onError={e => { const img = e.currentTarget; img.style.display = 'none'; const fallback = img.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = 'flex'; }} />
                  <div className="hidden h-full w-full items-center justify-center text-2xl font-bold text-foreground/70" aria-hidden="true">JG</div>
                </div>
                <LanguageToggle />
              </div>
              <h1 className="mb-2 text-4xl font-bold leading-tight text-foreground">{PERSON.name}</h1>
              <h2 className="mb-5 text-base font-medium text-foreground/70">{t(PERSON.role, lang)}</h2>
              <nav className="portfolio-nav mt-12 hidden lg:block" aria-label="Portfolio sections">
                <ul className="space-y-5">
                  {NAV.map(({ id, label }) => <li key={id}>
                    <button type="button" onClick={() => scrollTo(id)} aria-current={active === id ? 'page' : undefined} data-active={active === id} className={`group flex items-center gap-4 transition-all duration-300 ${active === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                      <span className="block h-px transition-all duration-300" />
                      <span className="text-xs font-mono uppercase tracking-[0.15em]">{t(label, lang)}</span>
                    </button>
                  </li>)}
                </ul>
              </nav>
              <button type="button" onClick={() => setCvOpen(true)} className="portfolio-cv mt-10 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors group hover:text-primary"><Download size={13} className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-primary" />{t(UI.downloadCV, lang)}</button>
            </div>
            <SocialLinks />
          </div>
        </aside>

        <main className="portfolio-main min-w-0 space-y-20 pb-24 lg:py-24">
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <footer className="group relative mt-8 min-h-[250px] overflow-hidden border border-cyan-300/10 bg-slate-950/70 px-6 py-7 shadow-[0_-20px_80px_rgba(34,211,238,0.04)] backdrop-blur-xl md:px-8 md:py-8" aria-label="Portfolio footer">
            <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(103,232,249,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,.035)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.05)] transition-transform duration-1000 group-hover:rotate-45" />
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_18px_rgba(103,232,249,.6)]" />
            <div className="relative z-10 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[.28em] text-cyan-300/60"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,.8)]" /> SYSTEM ONLINE <span className="h-px flex-1 bg-cyan-300/10" /><span>END / TRANSMISSION</span></div>
            <div className="relative z-10 mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><div className="flex items-end gap-3"><span className="font-mono text-5xl font-semibold tracking-[-.08em] text-white transition-all duration-500 group-hover:text-cyan-200 md:text-6xl">JG</span><span className="mb-1 border border-cyan-300/15 px-2 py-1 font-mono text-[8px] tracking-[.2em] text-cyan-300/60">2026</span></div><p className="mt-4 max-w-md text-xs leading-6 text-slate-500">{t(UI.builtBy, lang)} · {new Date().getFullYear()}</p></div><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group/back inline-flex items-center gap-3 border border-slate-700/70 bg-slate-900/50 px-4 py-3 font-mono text-[9px] uppercase tracking-[.2em] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200"><ArrowUp size={14} className="transition-transform duration-300 group-hover/back:-translate-y-1" /> BACK TO TOP</button></div>
            <div className="relative z-10 mt-10 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[.25em] text-slate-600"><span className="h-px w-8 bg-cyan-300/20" /> PERSONAL INFRASTRUCTURE / SYSTEMS / NETWORK / SECURITY <span className="ml-auto hidden h-px w-16 bg-cyan-300/20 md:block" /></div>
          </footer>
        </main>
      </div>
    </div>
    <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
  </div>;
}
