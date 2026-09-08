import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { CV_URL, UI, t } from '@/data/content';
import { useLanguage } from '@/i18n/language';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative z-10 flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border/30 bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border/20 px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t(UI.downloadCV, lang)}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary transition-colors hover:bg-primary/25"
            >
              <Download size={13} />
              {lang === 'pt' ? 'Transferir' : 'Download'}
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-white/5">
          <iframe
            src={`${CV_URL}#toolbar=0`}
            title="CV Preview"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
