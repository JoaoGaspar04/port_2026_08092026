import { SKILL_CATEGORIES, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Skills() {
  const { lang } = useLanguage();
  return (
    <section id="skills" className="portfolio-section scroll-mt-16 lg:scroll-mt-24">
      <header className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">03</span>
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {lang === 'pt' ? 'Competências' : 'Skills'}
        </h2>
        <span className="h-px flex-1 bg-border/40" />
      </header>
      <div className="skills-matrix">
        {SKILL_CATEGORIES.map((cat, index) => (
          <div key={t(cat.label, lang)} className="skill-cluster">
            <div className="skill-cluster-line">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i />
            </div>
            <p>{t(cat.label, lang)}</p>
            <ul>
              {cat.items.map((skill) => {
                const Icon = skill.icon;
                const name = t(skill.name, lang);
                return (
                  <li key={name}>
                    <Icon size={13} />
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
