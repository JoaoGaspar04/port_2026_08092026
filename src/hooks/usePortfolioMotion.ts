import { useEffect, useRef, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return reduced;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);
  useEffect(() => {
    const update = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);
  return progress;
}

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const next = useRef(position);
  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      next.current = { x: event.clientX, y: event.clientY };
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        setPosition(next.current);
      });
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);
  return position;
}

export function useSectionTracking(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -58% 0px', threshold: [0, .15, .35, .6] });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function useRevealSections(selector = '.portfolio-main .portfolio-section') {
  const reduced = useReducedMotion();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (reduced) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .06 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, reduced]);
}
