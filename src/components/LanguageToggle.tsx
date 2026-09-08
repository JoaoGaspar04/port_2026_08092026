import { useLanguage } from '@/i18n/language';
import type { Lang } from '@/data/content';

const OPTIONS: Lang[] = ['pt', 'en'];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="inline-flex items-center gap-1 rounded-full border border-border/40 p-0.5"
    >
      {OPTIONS.map((option) => {
        const isActive = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
              isActive
                ? 'bg-primary/15 text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
