import { ArrowUpRight } from 'lucide-react';
import { JOBS, UI, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24">
      <ul className="group/list space-y-1">
        {JOBS.map((job, i) => (
          <li key={i} className="group relative">
            <div className="grid grid-cols-[120px_1fr] gap-4 rounded-md p-4 -mx-4 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <span className="font-mono text-[11px] text-muted-foreground pt-1 leading-tight tracking-wide">
                {t(job.period, lang)}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors flex items-center gap-1">
                  {t(job.title, lang)} · {job.company}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 text-primary"
                  />
                </h3>
                {job.location && (
                  <p className="text-[11px] text-muted-foreground/70 mt-1 font-mono">
                    {t(job.location, lang)}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-2 mb-3 leading-relaxed">
                  {t(job.description, lang)}
                </p>
                {job.achievements && (
                  <div className="mb-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-2">
                      {t(UI.achievements, lang)}
                    </p>
                    <ul className="space-y-1.5">
                      {job.achievements[lang].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <ul className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary leading-5"
                    >
                      {t(tag, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
