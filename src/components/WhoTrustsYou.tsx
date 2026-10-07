const logos = [
  'Northwall Capital',
  'Helix Health',
  'Orbit Commerce',
  'Vertex SaaS',
  'Ironpeak Infra',
  'Meridian Pay',
  'Cipher Labs',
  'Atlas Cloud',
];

const sectors = ['Finance', 'SaaS', 'Healthcare', 'E-commerce', 'Infrastructure / DevOps'];

export default function WhoTrustsYou() {
  return (
    <section className="section-divider py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-4">
          Trusted by teams operating in regulated and high-risk environments
        </p>
        <p className="sr-only">Who trusts you</p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="text-xs font-medium text-slate-400 border border-white/10 rounded-full px-3.5 py-1.5 bg-white/[0.02]"
            >
              {sector}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 rounded-lg overflow-hidden">
          {logos.map((name) => (
            <div
              key={name}
              className="bg-ink-900/60 px-6 py-7 flex items-center justify-center text-center text-sm font-medium text-slate-500 hover:text-slate-300 hover:bg-ink-800/60 transition-colors duration-200"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
