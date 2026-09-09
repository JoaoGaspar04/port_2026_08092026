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
    pt: 'Técnico de Suporte Informático / Administrador',
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
    'Trabalho em infraestrutura de TI, administração de sistemas e redes, cibersegurança e automação de tarefas em ambiente empresarial, com mais de dois anos de experiência.',
    'A minha experiência inclui Active Directory e Windows Server, firewall e segurança, VPN, monitorização, virtualização e automação com PowerShell e Python. Na Torre Confecções, administrei mais de 80 utilizadores e estações de trabalho e implementei monitorização LibreNMS em mais de 270 dispositivos de rede e 50 equipamentos VoIP.',
    'Sou Técnico de Gestão de Redes e Sistemas Informáticos e frequentei o CTeSP em Cibersegurança na Escola Superior Politécnica da Guarda. Português é a minha língua nativa e tenho nível B1 de inglês.',
  ],
  en: [
    'I work in IT infrastructure, systems and network administration, cybersecurity and task automation within a corporate environment, with over two years of experience.',
    'My experience includes Active Directory and Windows Server, firewall and security, VPN, monitoring, virtualization and automation with PowerShell and Python. At Torre Confecções, I administered more than 80 users and workstations and implemented LibreNMS monitoring across more than 270 network devices and 50 VoIP systems.',
    'I am a Computer and Network Management Technician and attended the CTeSP in Cybersecurity at the Polytechnic University of Guarda. Portuguese is my native language and I have B1 English proficiency.',
  ],
};

/** Keywords highlighted (bold + foreground) inside the About paragraphs. */
export const ABOUT_HIGHLIGHTS: Record<Lang, string[]> = {
  pt: [
    'infraestrutura de TI',
    'administração de sistemas e redes',
    'cibersegurança',
    'automação de tarefas',
    'Active Directory',
    'Windows Server',
    'firewall e segurança',
    'VPN',
    'monitorização',
    'virtualização',
    'LibreNMS',
    '270 dispositivos de rede',
    'CTeSP em Cibersegurança',
    'Português',
    'B1 de inglês',
  ],
  en: [
    'IT infrastructure',
    'systems and network administration',
    'cybersecurity',
    'task automation',
    'Active Directory',
    'Windows Server',
    'firewall and security',
    'VPN',
    'monitoring',
    'virtualization',
    'LibreNMS',
    '270 network devices',
    'CTeSP in Cybersecurity',
    'Portuguese',
    'B1 English proficiency',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: { pt: 'Competências Principais', en: 'Core Competencies' },
    items: [
      { name: 'Active Directory', icon: ServerCog },
      { name: 'Windows Server', icon: Monitor },
      { name: { pt: 'Firewall & Segurança', en: 'Firewall & Security' }, icon: ShieldCheck },
      { name: 'VPN', icon: Lock },
      { name: { pt: 'Automação', en: 'Automation' }, icon: Workflow },
      { name: { pt: 'Monitorização', en: 'Monitoring' }, icon: Activity },
      { name: { pt: 'Cibersegurança', en: 'Cybersecurity' }, icon: ShieldCheck },
      { name: { pt: 'Virtualização', en: 'Virtualization' }, icon: ServerCog },
    ],
  },
  {
    label: { pt: 'Sistemas & Servidores', en: 'Systems & Servers' },
    items: [
      { name: 'Windows Server', icon: Monitor },
      { name: 'Active Directory', icon: ServerCog },
      { name: 'Linux (Debian, KDE Plasma)', icon: SiLinux },
    ],
  },
  {
    label: { pt: 'Redes & Segurança', en: 'Networking & Security' },
    items: [
      { name: { pt: 'Redes Empresariais', en: 'Enterprise Networking' }, icon: Network },
      { name: 'VLANs', icon: Wifi },
      { name: 'DHCP', icon: Router },
      { name: 'VPN (Tailscale, WireGuard, ZeroTier)', icon: Lock },
      { name: 'OPNsense', icon: SiOpnsense },
      { name: 'FortiGate', icon: ShieldCheck },
      { name: 'WatchGuard', icon: ShieldCheck },
    ],
  },
  {
    label: { pt: 'Monitorização & Virtualização', en: 'Monitoring & Virtualization' },
    items: [
      { name: 'LibreNMS', icon: Activity },
      { name: 'SNMP', icon: Activity },
      { name: 'Proxmox VE Scripting', icon: SiProxmox },
    ],
  },
  {
    label: { pt: 'Automação, Web & Ferramentas', en: 'Automation, Web & Tools' },
    items: [
      { name: 'PowerShell', icon: Terminal },
      { name: 'Python', icon: SiPython },
      { name: 'Cloudflare Pages', icon: SiCloudflare },
      { name: 'GitHub Actions', icon: SiGithub },
      { name: 'HTML/JS', icon: AppWindow },
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
    company: 'Torre Confecções, SA',
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
      pt: 'cPanel & WHM System Administrator I & II / Professional',
      en: 'cPanel & WHM System Administrator I & II / Professional',
    },
    issuer: 'cPanel',
    area: 'systems',
  },
  { name: 'Linux Essentials', issuer: 'Cisco Networking Academy', area: 'systems' },
  {
    name: {
      pt: 'FortiGate / Enterprise Firewall / FortiManager Administrator',
      en: 'FortiGate / Enterprise Firewall / FortiManager Administrator',
    },
    issuer: 'Fortinet',
    area: 'security',
  },
  {
    name: {
      pt: 'Trilha de Analista de Cibersegurança Júnior',
      en: 'Junior Cybersecurity Analyst Track',
    },
    issuer: 'Cisco NetAcad',
    area: 'security',
  },
  {
    name: {
      pt: 'Curso Completo de Administração de Windows Server',
      en: 'A Complete Course on Windows Server Administration',
    },
    issuer: 'Packt',
    area: 'systems',
  },
  {
    name: {
      pt: 'Certificado Profissional Google IT Support',
      en: 'Google IT Support Professional Certificate',
    },
    issuer: 'Google (Coursera)',
    area: 'systems',
  },
  {
    name: {
      pt: 'Microsoft IT Support Specialist',
      en: 'Microsoft IT Support Specialist',
    },
    issuer: 'Microsoft (Coursera)',
    area: 'microsoft',
  },
  {
    name: {
      pt: 'Formação Avançada em Cibersegurança',
      en: 'Advanced Cybersecurity Training',
    },
    issuer: 'C-ACADEMY',
    area: 'security',
  },
];

export const AREAS: Record<string, { color: string; label: I18n }> = {
  security: { color: 'bg-red-500/10 text-red-400', label: { pt: 'Segurança', en: 'Security' } },
  systems: { color: 'bg-yellow-500/10 text-yellow-400', label: { pt: 'Sistemas', en: 'Systems' } },
  networks: { color: 'bg-primary/10 text-primary', label: { pt: 'Redes', en: 'Networks' } },
  microsoft: { color: 'bg-blue-500/10 text-blue-400', label: 'Microsoft' },
};
