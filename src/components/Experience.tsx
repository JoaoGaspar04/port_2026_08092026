import { ArrowUpRight } from 'lucide-react';
import { JOBS, UI, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

export function Experience() {
  const { lang } = useLanguage();
  return <section id="experience" className="portfolio-section scroll-mt-16 lg:scroll-mt-24">
    <ul className="experience-stack">
      {JOBS.map((job, i) => <li key={i} className="experience-card">
        <div className="experience-marker"><span>{String(i + 1).padStart(2, '0')}</span><i /></div>
        <div className="experience-content">
          <div className="experience-head">
            <span className="experience-period">{t(job.period, lang)}</span>
            <h3>{t(job.title, lang)} · {job.company}<ArrowUpRight size={14} /></h3>
            {job.location && <p className="experience-location">{t(job.location, lang)}</p>}
          </div>
          <p className="experience-description">{t(job.description, lang)}</p>
          {job.achievements && <div className="experience-achievements"><p>{t(UI.achievements, lang)}</p><ul>{job.achievements[lang].map((item, idx) => <li key={idx}><span />{item}</li>)}</ul></div>}
          <ul className="experience-tags">{job.tags.map((tag, idx) => <li key={idx}>{t(tag, lang)}</li>)}</ul>
        </div>
      </li>)}
    </ul>
  </section>;
}
