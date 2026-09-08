import { SOCIALS } from '@/data/content';

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5 mt-12 lg:mt-0">
      {SOCIALS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block text-muted-foreground transition-all duration-200 hover:text-foreground hover:-translate-y-0.5"
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
