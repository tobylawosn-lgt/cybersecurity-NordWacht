import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

      <div className="relative mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-accent-400/90 tracking-wide mb-6 animate-fade-in">
          <ShieldCheck className="h-4 w-4" />
          <span>Attack Surface Reduction</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-500">Cloud · APIs · Internal Tools · Data Pipelines</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient leading-[1.1] max-w-4xl animate-fade-in-up">
          Reducing Attack Surface Across Modern Infrastructure
        </h1>

        <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          We help security teams identify and close exposure across cloud environments, APIs, internal
          tools, and data pipelines — before misconfigurations become incidents. No bold promises.
          Scoped, measurable, and aligned to the way your infrastructure actually runs.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {['SOC 2 Type II', 'ISO 27001', 'GDPR Aligned'].map((badge) => (
            <span key={badge} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400/70" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
