import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS, AREAS, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Certifications() {
  const { lang } = useLanguage();
  return <section id="certifications" className="portfolio-section scroll-mt-16 lg:scroll-mt-24">
    <ul className="cert-wall">
      {CERTIFICATIONS.map((cert, i) => { const area = AREAS[cert.area]; return <li key={i} className="cert-card">
        <span className="cert-index">{String(i + 1).padStart(2, '0')}</span>
        <div><p className="cert-name">{t(cert.name, lang)} <ArrowUpRight size={13} /></p><div className="cert-meta"><span>{cert.issuer}</span>{area && <span className={`cert-area ${area.color}`}>{t(area.label, lang)}</span>}</div></div>
      </li>; })}
    </ul>
  </section>;
}
