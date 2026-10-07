import { Shield } from 'lucide-react';

const footerLinks = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#proof', label: 'Proof of Control' },
  { href: '#engage', label: 'How We Engage' },
];

const legalLinks = ['Privacy', 'Terms', 'Security Policy'];

export default function Footer() {
  return (
    <footer className="section-divider border-t border-white/5 py-14">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 text-slate-100 mb-4">
              <Shield className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
              <span className="text-sm font-semibold tracking-tight">Sentinel Grid</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Attack surface reduction for security teams operating in regulated and high-risk
              environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-mono text-slate-600 tracking-wide mb-3">NAVIGATE</p>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-600 tracking-wide mb-3">LEGAL</p>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Sentinel Grid. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-600">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
