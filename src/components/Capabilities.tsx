import { ShieldCheck, Cloud, Database, Wrench, Network } from 'lucide-react';

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Infrastructure Hardening',
    risk: 'Reduces lateral movement',
    desc: 'Baseline configurations enforced across compute, network, and identity layers to limit how far an attacker can move after initial access.',
  },
  {
    icon: Network,
    title: 'API Security Posture',
    risk: 'Limits exposure from misconfigured endpoints',
    desc: 'Continuous discovery and review of API endpoints — authentication, authorization, and data exposure — surfaced as prioritized findings.',
  },
  {
    icon: Cloud,
    title: 'Cloud Configuration Guardrails',
    risk: 'Prevents privilege escalation paths',
    desc: 'Drift detection and enforced guardrails across cloud accounts to catch over-permissioned roles and unintended public exposure.',
  },
  {
    icon: Database,
    title: 'Data Pipeline Integrity',
    risk: 'Reduces risk of exfiltration via ETL/streams',
    desc: 'Review of data flows, access patterns, and streaming infrastructure to identify paths where sensitive data can be intercepted or extracted.',
  },
  {
    icon: Wrench,
    title: 'Internal Tool Segmentation',
    risk: 'Contains blast radius of compromised accounts',
    desc: 'Access boundaries and segmentation review for internal admin tools, dashboards, and service panels that hold elevated permissions.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-divider py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-accent-400/90 tracking-wide">CAPABILITIES</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-slate-100">
            What we reduce
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Each engagement targets a specific class of risk — not a feature checklist. The work is
            scoped to your environment and prioritized by business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.title}
                className="group relative rounded-xl border border-white/5 bg-ink-800/40 p-7 hover:border-accent-400/20 hover:bg-ink-800/60 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-accent-400/10 border border-accent-400/15 mb-5">
                  <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-1.5">{cap.title}</h3>
                <p className="text-sm text-accent-300/80 font-medium mb-3">{cap.risk}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
              </article>
            );
          })}

          <div className="relative rounded-xl border border-dashed border-white/8 bg-transparent p-7 flex flex-col justify-center">
            <p className="text-sm text-slate-500 leading-relaxed">
              Engagements are tailored. If your risk profile doesn't map cleanly to these categories,
              we scope a custom assessment around your actual surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
