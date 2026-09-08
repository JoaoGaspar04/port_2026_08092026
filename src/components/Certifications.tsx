import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS, AREAS, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Certifications() {
  const { lang } = useLanguage();

  return (
    <section id="certifications" className="scroll-mt-16 lg:scroll-mt-24">
      <ul className="group/list space-y-1">
        {CERTIFICATIONS.map((cert, i) => {
          const area = AREAS[cert.area];
          return (
            <li key={i} className="group relative">
              <div className="rounded-md p-4 -mx-4 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                <div className="flex items-start gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors flex items-center gap-1">
                    {t(cert.name, lang)}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 text-primary shrink-0"
                    />
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  {area && (
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${area.color}`}
                    >
                      {t(area.label, lang)}
                    </span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
