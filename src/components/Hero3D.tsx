import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Github, ShieldCheck, Wifi } from 'lucide-react';
import { useLanguage } from '@/i18n/language';
import { PERSON, t } from '@/data/content';

const nodes = [
  { id: 'core', label: 'JOÃO / CORE', sub: 'IT INFRASTRUCTURE', x: 50, y: 48, z: 70, tone: 'core' },
  { id: 'network', label: 'NETWORK', sub: 'ROUTING · VLAN · VPN', x: 17, y: 25, z: 20, tone: 'cyan' },
  { id: 'systems', label: 'SYSTEMS', sub: 'WINDOWS · AD · LINUX', x: 80, y: 23, z: 35, tone: 'blue' },
  { id: 'security', label: 'SECURITY', sub: 'FIREWALL · CYBERSECURITY', x: 18, y: 73, z: 15, tone: 'cyan' },
  { id: 'automation', label: 'AUTOMATION', sub: 'PYTHON · POWERSHELL', x: 81, y: 73, z: 25, tone: 'blue' },
];
const links = [['core','network'],['core','systems'],['core','security'],['core','automation'],['network','security'],['systems','automation']];

export function Hero3D() {
  const { lang } = useLanguage();
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState('core');
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const rotation = useMemo(() => ({ x: reduced ? 0 : (pointer.y - 50) * -0.055, y: reduced ? 0 : (pointer.x - 50) * 0.075 }), [pointer, reduced]);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return <section id="home" className="hero3d relative min-h-[780px] overflow-hidden border-b border-white/[0.06]"
    onPointerMove={(e) => { if (reduced) return; const r=e.currentTarget.getBoundingClientRect(); setPointer({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100}); }}
    onPointerLeave={() => setPointer({x:50,y:50})}>
    <div className="hero3d-grid" aria-hidden="true" /><div className="hero3d-noise" aria-hidden="true" />
    <div className="absolute left-6 top-6 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/60 sm:left-10 sm:top-10">SYSTEM / PERSONAL INFRASTRUCTURE</div>
    <div className="absolute right-6 top-6 z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/80 sm:right-10 sm:top-10"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> ONLINE / AVAILABLE</div>
    <div className="relative z-10 mx-auto grid min-h-[780px] max-w-[1500px] items-center gap-10 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 xl:px-20">
      <div className="max-w-2xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-cyan-300/80">01 / SYSTEM INITIALIZED</p>
        <h1 className="text-balance text-6xl font-semibold leading-[0.88] tracking-[-0.065em] text-white sm:text-7xl xl:text-[8.5rem]">João<br /><span className="text-cyan-300">Gaspar.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300/80 sm:text-xl">{t(PERSON.role, lang)} — infraestrutura, sistemas, redes e segurança.</p>
        <div className="mt-8 flex flex-wrap gap-3"><button onClick={() => scrollTo('experience')} className="hero3d-button hero3d-button-primary">EXPLORE SYSTEM <ArrowDown size={15} /></button><a href="https://github.com/JoaoGaspar04" target="_blank" rel="noreferrer" className="hero3d-button"><Github size={15} /> GITHUB <ArrowUpRight size={14} /></a></div>
        <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400"><span><strong className="block text-white">INFRA</strong>NETWORK + SYSTEMS</span><span><strong className="block text-white">SECURITY</strong>FIREWALL + VPN</span><span><strong className="block text-white">BUILD</strong>AUTOMATION + LAB</span></div>
      </div>
      <div className="hero3d-stage" style={{ perspective: 1300 }}><div className="hero3d-world" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
        <div className="hero3d-orbit hero3d-orbit-a" /><div className="hero3d-orbit hero3d-orbit-b" /><div className="hero3d-core-glow" />
        <svg className="hero3d-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{links.map(([a,b]) => { const from=nodes.find(n=>n.id===a)!; const to=nodes.find(n=>n.id===b)!; return <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className={active===a||active===b?'is-active':''}/>; })}</svg>
        {nodes.map(node => <button key={node.id} type="button" className={`hero3d-node hero3d-node-${node.tone} ${active===node.id?'is-active':''}`} style={{left:`${node.x}%`,top:`${node.y}%`,transform:`translate(-50%,-50%) translateZ(${node.z}px)`}} onMouseEnter={()=>setActive(node.id)} onFocus={()=>setActive(node.id)} onClick={()=>setActive(node.id)} aria-label={`${node.label}: ${node.sub}`}><span className="hero3d-node-pulse"/><span className="hero3d-node-icon">{node.id==='network'&&<Wifi size={17}/>} {node.id==='systems'&&<Cpu size={17}/>} {node.id==='security'&&<ShieldCheck size={17}/>} {node.id==='automation'&&<ArrowUpRight size={17}/>} {node.id==='core'&&<span className="h-2 w-2 rounded-full bg-current"/>}</span><span className="hero3d-node-copy"><strong>{node.label}</strong><small>{node.sub}</small></span></button>)}
        <div className="hero3d-console"><div><span>NODE</span><strong>{nodes.find(n=>n.id===active)?.label}</strong></div><div><span>STATE</span><strong className="text-emerald-300">AVAILABLE</strong></div><div><span>MODE</span><strong>BUILD / LEARN</strong></div></div>
      </div></div>
    </div>
  </section>;
}
