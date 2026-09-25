import { SKILL_CATEGORIES, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Skills() {
  const { lang } = useLanguage();
  return <section id="skills" className="portfolio-section scroll-mt-16 lg:scroll-mt-24">
    <div className="skills-matrix">
      {SKILL_CATEGORIES.map((cat, index) => <div key={t(cat.label, lang)} className="skill-cluster" style={{ '--cluster-index': index } as React.CSSProperties}>
        <div className="skill-cluster-line"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
        <p>{t(cat.label, lang)}</p>
        <ul>{cat.items.map((skill) => { const Icon = skill.icon; const name = t(skill.name, lang); return <li key={name}><Icon size={13} /><span>{name}</span></li>; })}</ul>
      </div>)}
    </div>
  </section>;
}
