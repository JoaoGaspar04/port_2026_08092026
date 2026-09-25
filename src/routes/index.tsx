import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
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
  const [active, setActive] = useState('about');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id); if (!el) return;
      const obs = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) setActive(id); }, { rootMargin: '-30% 0px -60% 0px' });
      obs.observe(el); observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const spotlightStyle = { backgroundImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(34,211,238,0.08), transparent 80%)` };

  return <div onMouseMove={e => setMouse({ x: e.clientX, y: e.clientY })} className="relative min-h-screen bg-background">
    <div className="pointer-events-none fixed inset-0 z-30" style={spotlightStyle} />
    <Hero3D />
    <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24"><div className="lg:flex lg:gap-16">
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:flex-col lg:justify-between lg:py-24 py-16">
        <div>
          <div className="mb-8 flex items-start justify-between gap-4"><div className="h-28 w-28 overflow-hidden rounded-full ring-2 ring-foreground/15 bg-foreground/5"><img src="/profile.jpg" alt={`Fotografia de ${PERSON.name}`} className="h-full w-full object-cover" onError={e => { const img=e.currentTarget; img.style.display='none'; const fallback=img.nextElementSibling as HTMLElement|null; if(fallback) fallback.style.display='flex'; }} /><div className="hidden h-full w-full items-center justify-center text-2xl font-bold text-foreground/70" aria-hidden="true">JG</div></div><LanguageToggle /></div>
          <h1 className="text-4xl font-bold text-foreground leading-tight mb-2">{PERSON.name}</h1><h2 className="text-base font-medium text-foreground/70 mb-5">{t(PERSON.role, lang)}</h2>
          <nav className="mt-12 hidden lg:block"><ul className="space-y-5">{NAV.map(({ id, label }) => <li key={id}><button onClick={() => scrollTo(id)} className={`group flex items-center gap-4 transition-all duration-200 ${active===id?'text-foreground':'text-muted-foreground hover:text-foreground'}`}><span className={`block h-px transition-all duration-300 ${active===id?'w-16 bg-foreground':'w-8 bg-muted-foreground/50 group-hover:w-14 group-hover:bg-foreground/70'}`} /><span className="text-xs font-mono tracking-[0.15em] uppercase">{t(label, lang)}</span></button></li>)}</ul></nav>
          <button onClick={() => setCvOpen(true)} className="mt-10 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors group"><Download size={13} className="group-hover:-translate-y-0.5 group-hover:text-primary transition-all duration-200" />{t(UI.downloadCV, lang)}</button>
        </div><SocialLinks />
      </aside>
      <main className="lg:w-[55%] lg:py-24 pb-24 space-y-28"><About /><Experience /><Skills /><Certifications /><footer className="text-xs text-muted-foreground/50 pt-8 border-t border-border/20 leading-relaxed">{t(UI.builtBy, lang)} · {new Date().getFullYear()}</footer></main>
    </div></div>
    <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
  </div>;
}
