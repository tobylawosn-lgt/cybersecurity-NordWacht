import { ArrowRight } from 'lucide-react';

const engagementModels = [
  { title: 'Advisory', desc: 'Assessment, findings, and prioritized recommendations delivered to your team for implementation.' },
  { title: 'Co-Managed', desc: 'Shared ownership of remediation with your security and platform teams, including validation.' },
  { title: 'Embedded Support', desc: 'Ongoing engagement with direct integration into your security operations and engineering workflows.' },
];

export default function HowWeEngage() {
  return (
    <section id="engage" className="section-divider py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-mono text-accent-400/90 tracking-wide">HOW WE ENGAGE</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-slate-100">
              A scoped starting point
            </h2>
            <div className="mt-6 space-y-5 text-slate-400 leading-relaxed">
              <p>
                We start with a scoped assessment of your cloud, API, and internal tool surface — no
                broad audits, no multi-week discovery phase. The goal is to map likely attack paths
                and identify where exposure is concentrated.
              </p>
              <p>
                Findings are prioritized by business impact, not by CVE count. You receive a clear set
                of recommended fixes ranked by risk reduction, so your team can act on what matters
                first.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="mailto:security@sentinelgrid.io?subject=Technical%20Overview%20Request"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-ink-950 bg-accent-400 hover:bg-accent-300 px-6 py-3.5 rounded-md transition-colors duration-200"
              >
                Speak to security engineering
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-xs text-slate-500">
                Or email{' '}
                <a href="mailto:security@sentinelgrid.io" className="text-accent-400 hover:text-accent-300">
                  security@sentinelgrid.io
                </a>{' '}
                — we respond within one business day.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {engagementModels.map((model, i) => (
              <div
                key={model.title}
                className="rounded-xl border border-white/5 bg-ink-800/30 p-6 hover:border-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <span className="text-sm font-mono text-slate-600 mt-0.5">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-100 mb-1.5">{model.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{model.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
