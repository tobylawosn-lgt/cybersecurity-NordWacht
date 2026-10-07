import { useEffect, useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#proof', label: 'Proof of Control' },
  { href: '#engage', label: 'How We Engage' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-slate-100">
            <Shield className="h-6 w-6 text-accent-400" strokeWidth={1.75} />
            <span className="text-base font-semibold tracking-tight">Sentinel Grid</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#engage"
              className="text-sm font-medium text-ink-950 bg-accent-400 hover:bg-accent-300 px-4 py-2 rounded-md transition-colors duration-200"
            >
              Request Overview
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#engage"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-medium text-ink-950 bg-accent-400 px-4 py-2.5 rounded-md"
            >
              Request Overview
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
