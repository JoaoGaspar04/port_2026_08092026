import { SKILL_CATEGORIES, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-24 space-y-6">
      {SKILL_CATEGORIES.map((cat) => (
        <div key={t(cat.label, lang)}>
          <p className="font-mono text-[11px] text-muted-foreground/60 tracking-widest uppercase mb-3">
            {t(cat.label, lang)}
          </p>
          <ul className="flex flex-wrap gap-2">
            {cat.items.map((skill) => {
              const Icon = skill.icon;
              const name = t(skill.name, lang);
              return (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[11px] text-primary transition-all hover:bg-primary/20 cursor-default"
                >
                  <Icon size={12} />
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
