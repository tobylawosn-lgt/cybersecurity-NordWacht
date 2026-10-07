import { Lock, Eye, Zap } from 'lucide-react';

const attackPath = [
  { label: 'Initial Access', detail: 'Phishing / leaked credential', controlled: false },
  { label: 'Lateral Movement', detail: 'Over-permissioned IAM role', controlled: true, control: 'Cloud Guardrails' },
  { label: 'Privilege Escalation', detail: 'Unsegmented admin tool', controlled: true, control: 'Internal Tool Segmentation' },
  { label: 'Data Access', detail: 'Exposed ETL pipeline', controlled: true, control: 'Data Pipeline Integrity' },
  { label: 'Exfiltration', detail: 'Unmonitored egress', controlled: true, control: 'Infrastructure Hardening' },
];

const metrics = [
  { label: 'Mean time to detect', value: '< 15 min', sub: 'median across deployed sensors' },
  { label: 'False positive reduction', value: '60%', sub: 'vs. baseline rule-based alerts' },
  { label: 'Coverage', value: '100%', sub: 'of cloud accounts, APIs, and services in scope' },
];

export default function ProofOfControl() {
  return (
    <section id="proof" className="section-divider py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-accent-400/90 tracking-wide">PROOF OF CONTROL</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-slate-100">
            Where controls intervene
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A simplified view of a typical attack path and the points at which scoped controls
            interrupt progression — reducing the likelihood that a single foothold becomes an incident.
          </p>
        </div>

        <div className="rounded-xl border border-white/5 bg-ink-800/30 p-7 lg:p-10 mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Eye className="h-4 w-4 text-accent-400/70" />
            <span className="text-xs font-mono text-slate-500 tracking-wide">TYPICAL ATTACK PATH</span>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-red-500/30 via-slate-600/30 to-accent-400/30 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0 relative">
              {attackPath.map((step, i) => (
                <div key={step.label} className="relative flex lg:flex-col items-center gap-4 lg:gap-0">
                  <div className="flex-1 lg:w-full lg:text-center">
                    <div className="flex lg:flex-col items-center lg:gap-3 gap-3">
                      <div
                        className={`relative flex items-center justify-center h-10 w-10 rounded-full border-2 shrink-0 ${
                          step.controlled
                            ? 'border-accent-400/50 bg-accent-400/10'
                            : 'border-red-500/40 bg-red-500/10'
                        }`}
                      >
                        {step.controlled ? (
                          <Lock className="h-4 w-4 text-accent-400" strokeWidth={2} />
                        ) : (
                          <Zap className="h-4 w-4 text-red-400" strokeWidth={2} />
                        )}
                        {i < attackPath.length - 1 && (
                          <span className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-slate-700/40" />
                        )}
                      </div>
                      <div className="lg:mt-3 text-left lg:text-center">
                        <p className="text-sm font-medium text-slate-200">{step.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{step.detail}</p>
                        {step.controlled && (
                          <p className="text-xs text-accent-300/70 mt-1.5 font-mono">{step.control}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/5">
            <span className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-3 w-3 rounded-full border-2 border-red-500/40 bg-red-500/10" />
              Uncontrolled entry point
            </span>
            <span className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-3 w-3 rounded-full border-2 border-accent-400/50 bg-accent-400/10" />
              Control intervention point
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/5 bg-ink-800/30 p-6">
              <p className="text-3xl font-semibold text-slate-100 tracking-tight">{m.value}</p>
              <p className="text-sm text-slate-300 mt-2">{m.label}</p>
              <p className="text-xs text-slate-500 mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-6 max-w-2xl">
          Figures are representative of engagements with Fortune 500 financial services and
          regulated SaaS providers. Actual results vary by environment scope and maturity.
        </p>
      </div>
    </section>
  );
}
