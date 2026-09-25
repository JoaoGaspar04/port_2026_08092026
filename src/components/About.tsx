import { Fragment } from 'react';
import { ABOUT, ABOUT_HIGHLIGHTS } from '@/data/content';
import { useLanguage } from '@/i18n/language';

function escapeRegExp(value: string): string { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function renderHighlighted(text: string, keywords: string[]) {
  if (keywords.length === 0) return text;
  const pattern = new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'g');
  return text.split(pattern).map((part, i) => keywords.includes(part) ? <span key={i} className="text-foreground font-medium">{part}</span> : <Fragment key={i}>{part}</Fragment>);
}

export function About() {
  const { lang } = useLanguage();
  const paragraphs = ABOUT[lang];
  const highlights = ABOUT_HIGHLIGHTS[lang];
  return <section id="about" className="portfolio-section scroll-mt-16 lg:scroll-mt-24">
    <div className="section-orbit" aria-hidden="true" />
    <div className="about-copy">
      {paragraphs.map((paragraph, i) => <p key={i}>{renderHighlighted(paragraph, highlights)}</p>)}
    </div>
  </section>;
}
