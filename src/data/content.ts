import {
  SiLinux,
  SiProxmox,
  SiOpnsense,
  SiDocker,
  SiCloudflare,
  SiGithub,
  SiPython,
  SiGit,
  SiJenkins,
  SiCpanel,
  SiTailscale,
  SiZerotier,
} from 'react-icons/si';
import type { ElementType } from 'react';
import {
  Monitor,
  Network,
  ShieldCheck,
  ServerCog,
  Activity,
  Wifi,
  Lock,
  Linkedin,
  Mail,
  Router,
  Terminal,
  Settings,
  HardDrive,
  LifeBuoy,
  Plug,
  Workflow,
  AppWindow,
} from 'lucide-react';

type IconComponent = ElementType;

export type Lang = 'pt' | 'en';

/** A translatable string: either a shared literal or a per-language map. */
export type I18n = string | { pt: string; en: string };

/** Resolve a translatable value for the active language. */
export function t(value: I18n, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export interface NavLink {
  id: string;
  label: I18n;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface SkillItem {
  name: I18n;
  icon: IconComponent;
}

export interface SkillCategory {
  label: I18n;
  items: SkillItem[];
}

export interface Job {
  period: I18n;
  title: I18n;
  company: string;
  location?: I18n;
  description: I18n;
  achievements?: { pt: string[]; en: string[] };
  tags: I18n[];
}

export interface Certification {
  name: I18n;
  issuer: string;
  area: string;
}

export const PERSON = {
  name: 'João Gaspar',
  role: {
    pt: 'Técnico de Suporte e Administração de Sistemas',
    en: 'IT Support Technician / Administrator',
  },
} as const;

export const CV_URL = '/CV_Joao_Gaspar.pdf';

export const UI = {
  downloadCV: { pt: 'Descarregar CV', en: 'Download CV' },
  achievements: { pt: 'Principais conquistas', en: 'Key achievements' },
  builtBy: {
    pt: 'Concebido e desenvolvido por João Gaspar',
    en: 'Designed & built by João Gaspar',
  },
} as const;

export const NAV: NavLink[] = [
  { id: 'about', label: { pt: 'Sobre', en: 'About' } },
  { id: 'experience', label: { pt: 'Experiência', en: 'Experience' } },
  { id: 'skills', label: { pt: 'Competências', en: 'Skills' } },
  { id: 'certifications', label: { pt: 'Certificações', en: 'Certifications' } },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/JoaoGaspar04', icon: SiGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joacgaspar',
    icon: Linkedin,
  },
  { label: 'Email', href: 'mailto:joaogaspar@gmail.com', icon: Mail },
];

export const ABOUT: Record<Lang, string[]> = {
  pt: [
    'Técnico de suporte e administração de sistemas com experiência em administração de redes, sistemas e cibersegurança. Trabalho com Active Directory, Windows Server, firewalls, VPNs, monitorização e automação, procurando sempre transformar tarefas repetitivas em processos mais simples e fiáveis.',
    'Na Torre Confecções, administrei Active Directory e Windows Server para mais de 80 utilizadores e estações de trabalho, implementei monitorização LibreNMS em mais de 270 dispositivos de rede e 50 equipamentos VoIP, e criei dashboards para apoiar a operação diária da equipa de TI.',
    'Tenho formação como Técnico de Gestão de Redes e Sistemas Informáticos e frequentei o CTeSP em Cibersegurança. A minha formação é complementada por certificações em Linux, redes, firewalls, suporte técnico, Windows Server e cPanel. Português é a minha língua nativa e tenho nível B1 de inglês.',
  ],
  en: [
    'IT support and systems administration technician with experience in network, systems and cybersecurity administration. I work with Active Directory, Windows Server, firewalls, VPNs, monitoring and automation, always looking for ways to turn repetitive tasks into simpler and more reliable processes.',
    "At Torre Confecções, I administered Active Directory and Windows Server for more than 80 users and workstations, implemented LibreNMS monitoring across more than 270 network devices and 50 VoIP systems, and built dashboards to support the IT team's daily operations.",
    'I trained as a Computer and Network Management Technician and attended a CTeSP in Cybersecurity. My education is complemented by certifications in Linux, networking, firewalls, technical support, Windows Server and cPanel. Portuguese is my native language and I have B1 English proficiency.',
  ],
};

/** Keywords highlighted (bold + foreground) inside the About paragraphs. */
export const ABOUT_HIGHLIGHTS: Record<Lang, string[]> = {
  pt: [
    'suporte e administração de sistemas',
    'redes',
    'cibersegurança',
    'Active Directory',
    'Windows Server',
    'firewalls',
    'VPNs',
    'monitorização',
    'automação',
    'LibreNMS',
    '270 dispositivos de rede',
    'CTeSP em Cibersegurança',
    'Linux',
    'Português',
    'B1 de inglês',
  ],
  en: [
    'IT support and systems administration',
    'network',
    'cybersecurity',
    'Active Directory',
    'Windows Server',
    'firewalls',
    'VPNs',
    'monitoring',
    'automation',
    'LibreNMS',
    '270 network devices',
    'CTeSP in Cybersecurity',
    'Linux',
    'Portuguese',
    'B1 English proficiency',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: { pt: 'Sistemas & Diretoria', en: 'Systems & Directory' },
    items: [
      { name: 'Windows Server', icon: Monitor },
      { name: 'Linux', icon: SiLinux },
      { name: 'Active Directory', icon: ServerCog },
      { name: 'Group Policy (GPO)', icon: Settings },
      { name: 'Permissions', icon: Lock },
    ],
  },
  {
    label: { pt: 'Redes & Segurança', en: 'Networking & Security' },
    items: [
      { name: 'Networking', icon: Network },
      { name: 'VLANs', icon: Wifi },
      { name: 'VPN', icon: Lock },
      { name: { pt: 'Firewall & Segurança', en: 'Firewall & Security' }, icon: ShieldCheck },
      { name: 'OPNsense', icon: SiOpnsense },
      { name: 'FortiGate', icon: ShieldCheck },
      { name: 'WatchGuard', icon: ShieldCheck },
      { name: 'Huawei VRP', icon: Router },
      { name: 'SNMP', icon: Activity },
      { name: 'Tailscale', icon: SiTailscale },
      { name: 'ZeroTier', icon: SiZerotier },
    ],
  },
  {
    label: { pt: 'Monitorização & Infraestrutura', en: 'Monitoring & Infrastructure' },
    items: [
      { name: 'LibreNMS', icon: Activity },
      { name: { pt: 'Monitorização', en: 'Monitoring' }, icon: Activity },
      { name: { pt: 'Virtualização', en: 'Virtualization' }, icon: ServerCog },
      { name: 'Proxmox VE Scripting', icon: SiProxmox },
      { name: 'Docker', icon: SiDocker },
      { name: 'Cloudflare Pages', icon: SiCloudflare },
      { name: 'Jenkins', icon: SiJenkins },
    ],
  },
  {
    label: { pt: 'Automação & Desenvolvimento', en: 'Automation & Development' },
    items: [
      { name: { pt: 'Automação', en: 'Automation' }, icon: Workflow },
      { name: 'PowerShell', icon: Terminal },
      { name: 'Python', icon: SiPython },
      { name: 'HTML/JS', icon: AppWindow },
      { name: 'GitHub Actions', icon: SiGithub },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    label: { pt: 'Suporte & Ferramentas', en: 'Support & Tools' },
    items: [
      { name: 'Helpdesk', icon: LifeBuoy },
      { name: 'cPanel/WHM', icon: SiCpanel },
      { name: 'GParted', icon: HardDrive },
      { name: 'FlashFab', icon: Plug },
      { name: 'VS Code', icon: Terminal },
    ],
  },
];

export const JOBS: Job[] = [
  {
    period: { pt: 'FEV 2025 — SET 2026', en: 'FEB 2025 — SEP 2026' },
    title: {
      pt: 'Técnico de Gestão de Redes e Sistemas Informáticos',
      en: 'Computer and Network Management Technician',
    },
    company: 'Torre Confecções, S.A.',
    location: 'Belmonte, Portugal',
    description: {
      pt: 'Responsável pela infraestrutura de rede, administração de sistemas e monitorização no departamento de TI.',
      en: 'Responsible for network infrastructure, systems administration and monitoring within the IT department.',
    },
    achievements: {
      pt: [
        'Administração de Active Directory e Windows Server para mais de 80 utilizadores e estações de trabalho, incluindo GPOs e permissões.',
        'Implementação e gestão de monitorização LibreNMS em mais de 270 dispositivos de rede e 50 equipamentos VoIP.',
        'Criação de dashboards LibreNMS para contactos, UPS, inventário, tickets, tabelas de switches e mapas interativos.',
        'Desenvolvimento de uma ferramenta GUI em Python que agrega scripts PowerShell, reduzindo o tempo de diagnóstico e configuração.',
        'Implementação de imagens de sistema para acelerar a preparação de estações de trabalho.',
        'Configuração e gestão de firewalls WatchGuard, segmentação de rede e controlo de acessos.',
        'Configuração de monitorização SNMP em equipamentos de rede Huawei.',
        'Implementação de um servidor Jenkins com acesso remoto seguro através de VPN Tailscale.',
      ],
      en: [
        'Administered Active Directory and Windows Server for 80+ users and workstations, including GPOs and permissions.',
        'Implemented and managed LibreNMS monitoring across 270+ network devices and 50+ VoIP systems.',
        'Built LibreNMS dashboards for contacts, UPS status, equipment inventory, ticketing, switch tables and interactive maps.',
        'Developed a Python GUI tool aggregating PowerShell scripts, reducing workstation diagnosis and setup time.',
        'Implemented system images to accelerate workstation deployment.',
        'Configured and managed WatchGuard firewalls, including network segmentation and access control.',
        'Configured SNMP monitoring on Huawei network equipment.',
        'Deployed a Jenkins server with secure remote access through Tailscale VPN.',
      ],
    },
    tags: [
      'Active Directory',
      'Windows Server',
      'LibreNMS',
      'WatchGuard',
      'PowerShell',
      'Python',
    ],
  },
  {
    period: { pt: 'ABR 2022 — JUN 2022', en: 'APR 2022 — JUN 2022' },
    title: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'SuporteDreams',
    description: {
      pt: 'Estágio curricular de nível 5 em suporte técnico e administração de sistemas.',
      en: 'Level 5 curricular internship in technical support and systems administration.',
    },
    achievements: {
      pt: [
        'Prestação de suporte técnico, incluindo configuração de computadores e sistemas Windows.',
        'Diagnóstico e resolução de problemas de hardware e software.',
        'Administração básica de redes e equipamentos.',
      ],
      en: [
        'Provided technical support, including computer and Windows system setup.',
        'Diagnosed and resolved hardware and software issues.',
        'Performed basic network and equipment administration.',
      ],
    },
    tags: [
      { pt: 'Windows OS', en: 'Windows OS' },
      { pt: 'Diagnóstico de Hardware', en: 'Hardware Diagnostics' },
      { pt: 'Redes', en: 'Networking' },
      { pt: 'Impressoras e Periféricos', en: 'Printers and Peripherals' },
    ],
  },
  {
    period: { pt: 'JAN 2021 — MAR 2021', en: 'JAN 2021 — MAR 2021' },
    title: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'ClickMed.pt',
    description: {
      pt: 'Estágio curricular de nível 4 com funções de suporte técnico e manutenção de equipamentos.',
      en: 'Level 4 curricular internship focused on technical support and equipment maintenance.',
    },
    achievements: {
      pt: [
        'Suporte técnico e instalação/configuração de equipamentos de TI.',
        'Manutenção preventiva e corretiva de sistemas.',
        'Apoio aos utilizadores na resolução de problemas técnicos.',
      ],
      en: [
        'Provided technical support and installed/configured IT equipment.',
        'Performed preventive and corrective maintenance on systems.',
        'Assisted users in resolving technical issues.',
      ],
    },
    tags: [
      'Windows',
      { pt: 'Diagnóstico de Hardware', en: 'Hardware Diagnostics' },
      { pt: 'Redes Básicas', en: 'Basic Networking' },
      { pt: 'Impressoras e Periféricos', en: 'Printers and Peripherals' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: {
      pt: 'Monitorização de Redes com LibreNMS',
      en: 'Network Monitoring with LibreNMS',
    },
    issuer: 'LibreNMS',
    area: 'networks',
  },
  {
    name: {
      pt: 'Firewall & Segurança de Rede (WatchGuard)',
      en: 'Firewall & Network Security (WatchGuard)',
    },
    issuer: 'WatchGuard',
    area: 'security',
  },
  {
    name: {
      pt: 'Administração de Active Directory e Windows Server',
      en: 'Active Directory & Windows Server Administration',
    },
    issuer: 'Microsoft',
    area: 'microsoft',
  },
  {
    name: 'cPanel & WHM System Administrator',
    issuer: 'cPanel',
    area: 'systems',
  },
  {
    name: {
      pt: 'Automação com PowerShell e Python',
      en: 'Automation with PowerShell and Python',
    },
    issuer: 'Self-taught',
    area: 'systems',
  },
  {
    name: {
      pt: 'Configuração de VPNs (Tailscale / ZeroTier)',
      en: 'VPN Configuration (Tailscale / ZeroTier)',
    },
    issuer: 'Self-taught',
    area: 'security',
  },
  {
    name: {
      pt: 'Monitorização SNMP em Equipamentos de Rede',
      en: 'SNMP Monitoring on Network Equipment',
    },
    issuer: 'Self-taught',
    area: 'networks',
  },
  {
    name: {
      pt: 'Administração de Sistemas Linux (CLI)',
      en: 'Linux System Administration (CLI)',
    },
    issuer: 'Self-taught',
    area: 'systems',
  },
  {
    name: {
      pt: 'Virtualização com Proxmox VE',
    en: 'Proxmox VE Virtualization',
    },
    issuer: 'Self-taught',
    area: 'systems',
  },
  {
    name: {
      pt: 'CI/CD com Jenkins',
      en: 'CI/CD with Jenkins',
    },
    issuer: 'Self-taught',
    area: 'systems',
  },
];

export const AREAS: Record<string, { color: string; label: I18n }> = {
  security: { color: 'bg-red-500/10 text-red-400', label: { pt: 'Segurança', en: 'Security' } },
  systems: { color: 'bg-yellow-500/10 text-yellow-400', label: { pt: 'Sistemas', en: 'Systems' } },
  networks: { color: 'bg-primary/10 text-primary', label: { pt: 'Redes', en: 'Networks' } },
  microsoft: { color: 'bg-blue-500/10 text-blue-400', label: 'Microsoft' },
};
