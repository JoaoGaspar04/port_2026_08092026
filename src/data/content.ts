import {
  SiLinux,
  SiProxmox,
  SiOpnsense,
  SiDocker,
  SiCloudflare,
  SiMikrotik,
  SiAnsible,
  SiGithub,
  SiPython,
  SiGit,
  SiJenkins,
  SiNginx,
  SiHomeassistant,
  SiCpanel,
  SiOpenwrt,
  SiLetsencrypt,
  SiUbiquiti,
  SiTailscale,
  SiZerotier,
  SiAdguard,
} from 'react-icons/si';
import type { ElementType } from 'react';
import {
  Monitor,
  Network,
  ShieldCheck,
  ServerCog,
  Activity,
  Container,
  Globe,
  Database,
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
  Share2,
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
  name: 'João Cruz Gaspar',
  role: {
    pt: 'Técnico de Infraestrutura, Sistemas e Redes',
    en: 'Infrastructure, Systems & Networks Technician',
  },
} as const;

export const CV_URL = '/CV_Joao_Gaspar.pdf';

export const UI = {
  downloadCV: { pt: 'Descarregar CV', en: 'Download CV' },
  achievements: { pt: 'Principais conquistas', en: 'Key achievements' },
  builtBy: {
    pt: 'Concebido e desenvolvido por João Cruz Gaspar',
    en: 'Designed & built by João Cruz Gaspar',
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
  { label: 'Email', href: 'mailto:support@joaocgaspar.ovh', icon: Mail },
];

export const ABOUT: Record<Lang, string[]> = {
  pt: [
    'Trabalho com redes, servidores Windows, Active Directory, firewall e VPN em ambiente empresarial. Faço a parte que é preciso fazer, mas a verdade é que a parte que mais gosto é quando encontro um problema chato e repetitivo — aí prefiro perder uma tarde a escrever um script em PowerShell ou Python do que continuar a fazê-lo à mão para sempre.',
    'Fora do trabalho isso não para: tenho um homelab em casa (Proxmox, OPNsense, Zabbix) só para ir testando o que não teria oportunidade de testar de outra forma, e é normal passar uma noite a tentar perceber porque é que uma coisa não está a funcionar como devia.',
    'E como a segurança é hoje uma das vertentes mais importantes em qualquer infraestrutura, foi também essa área que me levou a aprofundar conhecimentos com o CTeSP em Cibersegurança.',
  ],
  en: [
    "I work with networks, Windows servers, Active Directory, firewalls and VPNs in a corporate environment. I do what needs to be done, but the truth is the part I enjoy most is when I hit an annoying, repetitive problem — that's when I'd rather spend an afternoon writing a PowerShell or Python script than keep doing it by hand forever.",
    "Outside of work it doesn't stop: I have a homelab at home (Proxmox, OPNsense, Zabbix) just to keep testing things I wouldn't get to try otherwise, and it's normal to spend a night figuring out why something isn't working the way it should.",
    'And since security is now one of the most important aspects of any infrastructure, it was also that area that led me to deepen my knowledge with the CTeSP in Cybersecurity.',
  ],
};

/** Keywords highlighted (bold + foreground) inside the About paragraphs. */
export const ABOUT_HIGHLIGHTS: Record<Lang, string[]> = {
  pt: [
    'redes',
    'servidores Windows',
    'Active Directory',
    'firewall',
    'VPN',
    'PowerShell',
    'Python',
    'homelab',
    'Proxmox',
    'OPNsense',
    'Zabbix',
    'segurança',
    'CTeSP em Cibersegurança',
  ],
  en: [
    'networks',
    'Windows servers',
    'Active Directory',
    'firewalls',
    'VPNs',
    'PowerShell',
    'Python',
    'homelab',
    'Proxmox',
    'OPNsense',
    'Zabbix',
    'security',
    'CTeSP in Cybersecurity',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: { pt: 'Sistemas Operativos', en: 'Operating Systems' },
    items: [
      { name: 'Linux', icon: SiLinux },
      { name: 'Windows Server', icon: Monitor },
      { name: 'Windows', icon: Monitor },
    ],
  },
  {
    label: { pt: 'Redes & Segurança', en: 'Networking & Security' },
    items: [
      { name: 'Networking', icon: Network },
      { name: 'TCP/IP', icon: Globe },
      { name: 'VLANs', icon: Wifi },
      { name: 'DNS/DHCP', icon: Database },
      { name: 'Firewall', icon: Lock },
      { name: { pt: 'Cibersegurança', en: 'Cybersecurity' }, icon: ShieldCheck },
      { name: 'Mikrotik', icon: SiMikrotik },
      { name: 'FortiGate', icon: ShieldCheck },
      { name: 'WatchGuard', icon: ShieldCheck },
      { name: 'UniFi', icon: SiUbiquiti },
      { name: 'SNMP', icon: Activity },
      { name: 'Huawei VRP', icon: Router },
      { name: 'VPN', icon: Lock },
      { name: 'SSH', icon: Terminal },
      { name: 'OpenWrt', icon: SiOpenwrt },
    ],
  },
  {
    label: { pt: 'Infraestrutura & Homelab', en: 'Infrastructure & Homelab' },
    items: [
      { name: { pt: 'Virtualização', en: 'Virtualization' }, icon: ServerCog },
      { name: 'Proxmox', icon: SiProxmox },
      { name: 'OPNsense', icon: SiOpnsense },
      { name: 'Docker', icon: SiDocker },
      { name: 'Cloudflare Tunnel', icon: SiCloudflare },
      { name: 'Zabbix', icon: Activity },
      { name: 'Self-Hosting', icon: Container },
      { name: 'Ansible', icon: SiAnsible },
      { name: 'LibreNMS', icon: Activity },
      { name: 'Reverse Proxy (Nginx)', icon: SiNginx },
      { name: 'Tailscale', icon: SiTailscale },
      { name: 'ZeroTier', icon: SiZerotier },
      { name: 'AdGuard Home', icon: SiAdguard },
      { name: 'Home Assistant', icon: SiHomeassistant },
      { name: "TLS/SSL (Let's Encrypt)", icon: SiLetsencrypt },
    ],
  },
  {
    label: { pt: 'Sistemas & Diretoria', en: 'Systems & Directory' },
    items: [
      { name: 'Active Directory', icon: ServerCog },
      { name: 'Group Policy (GPO)', icon: Settings },
      { name: 'WSUS', icon: Settings },
      { name: 'Samba', icon: Share2 },
    ],
  },
  {
    label: { pt: 'Automação & Desenvolvimento', en: 'Automation & Development' },
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'PowerShell', icon: Terminal },
      { name: { pt: 'Automação', en: 'Automation' }, icon: Workflow },
      { name: 'Git', icon: SiGit },
      { name: 'Jenkins', icon: SiJenkins },
      { name: { pt: 'Desenvolvimento de GUI', en: 'GUI Development' }, icon: AppWindow },
    ],
  },
  {
    label: {
      pt: 'Suporte & Infraestrutura Física',
      en: 'Support & Physical Infrastructure',
    },
    items: [
      { name: 'Helpdesk', icon: LifeBuoy },
      { name: 'UPS / WinPower', icon: Plug },
      { name: { pt: 'Backup & Recuperação', en: 'Backup & Recovery' }, icon: HardDrive },
      { name: 'cPanel/WHM', icon: SiCpanel },
      {
        name: {
          pt: 'Imagem de Disco (Macrium Reflect)',
          en: 'Disk Imaging (Macrium Reflect)',
        },
        icon: HardDrive,
      },
    ],
  },
];

export const JOBS: Job[] = [
  {
    period: { pt: 'OUT 2025 — PRESENTE', en: 'OCT 2025 — PRESENT' },
    title: { pt: 'Especialista em TI', en: 'IT Specialist' },
    company: 'Torre Sociedade Confecções, S.A.',
    location: 'Comeal da Torre, Portugal',
    description: {
      pt: 'Especialista em TI a tempo integral responsável pela administração de sistemas, infraestrutura de rede e segurança em ambiente empresarial.',
      en: 'Full-time IT Specialist responsible for systems administration, network infrastructure and security in a corporate environment.',
    },
    achievements: {
      pt: [
        'Administração de servidores Windows, Active Directory e Group Policy na rede empresarial.',
        'Gestão da infraestrutura de rede incluindo firewalls, VPNs e segmentação VLAN.',
        'Automação de tarefas repetitivas com PowerShell e Python, reduzindo carga manual.',
        'Manutenção do endurecimento de segurança de rede e monitorização de ameaças.',
      ],
      en: [
        'Administration of Windows servers, Active Directory and Group Policy across the corporate network.',
        'Management of the network infrastructure including firewalls, VPNs and VLAN segmentation.',
        'Automation of repetitive tasks with PowerShell and Python, reducing manual workload.',
        'Maintenance of network security hardening and threat monitoring.',
      ],
    },
    tags: [
      { pt: 'Administração de Sistemas', en: 'Systems Administration' },
      'Active Directory',
      { pt: 'Segurança de Redes', en: 'Network Security' },
      'PowerShell',
      'Python',
      'Windows Server',
    ],
  },
  {
    period: { pt: 'FEV 2025 — JUN 2025', en: 'FEB 2025 — JUN 2025' },
    title: {
      pt: 'Técnico de Informática e Gestão de Redes',
      en: 'IT & Network Management Technician',
    },
    company: 'Torre Confecções',
    description: {
      pt: 'Estágio curricular de nível 5 com foco em cibersegurança e gestão de redes. Suporte técnico a sistemas e infraestrutura local, manutenção de equipamentos e configuração de redes internas.',
      en: 'Level 5 curricular internship focused on cybersecurity and network management. Technical support for systems and local infrastructure, equipment maintenance and internal network configuration.',
    },
    tags: [
      { pt: 'Cibersegurança', en: 'Cybersecurity' },
      { pt: 'Gestão de Redes', en: 'Network Management' },
      { pt: 'Suporte Técnico', en: 'Technical Support' },
      'Linux',
      'Windows',
    ],
  },
  {
    period: { pt: 'ABR 2022 — JUN 2022', en: 'APR 2022 — JUN 2022' },
    title: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'SuporteDreams',
    description: {
      pt: 'Estágio curricular de nível 4 com foco em suporte técnico e redes de computadores. Diagnóstico e resolução de problemas em ambientes Windows e Linux, gestão de equipamentos de rede.',
      en: 'Level 4 curricular internship focused on technical support and computer networks. Diagnosis and resolution of problems in Windows and Linux environments, management of network equipment.',
    },
    tags: [
      { pt: 'Redes de Computadores', en: 'Computer Networks' },
      { pt: 'Suporte Técnico', en: 'Technical Support' },
      'Windows',
      { pt: 'Diagnóstico', en: 'Diagnostics' },
    ],
  },
  {
    period: { pt: 'AGO 2020 — NOV 2020', en: 'AUG 2020 — NOV 2020' },
    title: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'ClickMed.pt',
    description: {
      pt: 'Estágio curricular de nível 4 em ambiente clínico. Suporte a utilizadores, manutenção de hardware e software, e apoio à infraestrutura de TI da empresa.',
      en: "Level 4 curricular internship in a clinical environment. User support, hardware and software maintenance, and support for the company's IT infrastructure.",
    },
    tags: [
      { pt: 'Suporte Técnico', en: 'Technical Support' },
      'Hardware',
      { pt: 'Infraestrutura', en: 'Infrastructure' },
      'Windows',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: {
      pt: 'Preparação para LFCS — Linux System Administration',
      en: 'LFCS Prep — Linux System Administration',
    },
    issuer: 'Pearson',
    area: 'systems',
  },
  { name: 'FortiGate Administrator', issuer: 'Fortinet', area: 'security' },
  { name: 'cPanel & WHM System Administrator', issuer: 'cPanel', area: 'systems' },
  {
    name: 'A Complete Course on Windows Server Administration',
    issuer: 'Packt',
    area: 'systems',
  },
  { name: 'ISO/IEC 27701:2025 Lead A', issuer: 'Mastermind', area: 'privacy' },
  {
    name: {
      pt: 'Fundamentos de Redes com Mikrotik',
      en: 'Networking Fundamentals with Mikrotik',
    },
    issuer: 'Heltech IT Solutions',
    area: 'networks',
  },
  {
    name: {
      pt: 'Trilha Profissionalizante do Analista de Cibersegurança Júnior',
      en: 'Junior Cybersecurity Analyst Career Path',
    },
    issuer: 'Cisco Networking Academy',
    area: 'security',
  },
  {
    name: {
      pt: 'CCNA 1 – Introdução a Redes de Computadores',
      en: 'CCNA 1 – Introduction to Networks',
    },
    issuer: 'Universidade da Beira Interior',
    area: 'networks',
  },
  {
    name: 'Palo Alto Networks Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
    area: 'security',
  },
  {
    name: 'Microsoft Cloud Support Associate',
    issuer: 'Microsoft',
    area: 'microsoft',
  },
];

export const AREAS: Record<string, { color: string; label: I18n }> = {
  security: { color: 'bg-red-500/10 text-red-400', label: { pt: 'Segurança', en: 'Security' } },
  privacy: { color: 'bg-purple-500/10 text-purple-400', label: { pt: 'Privacidade', en: 'Privacy' } },
  systems: { color: 'bg-yellow-500/10 text-yellow-400', label: { pt: 'Sistemas', en: 'Systems' } },
  networks: { color: 'bg-primary/10 text-primary', label: { pt: 'Redes', en: 'Networks' } },
  microsoft: { color: 'bg-blue-500/10 text-blue-400', label: 'Microsoft' },
};
