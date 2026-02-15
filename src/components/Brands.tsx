import { GBO_SYSTEMS } from "@/lib/data";

export default function Brands() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-light" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Оборудование</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Только проверенные бренды</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Работаем с ведущими европейскими производителями ГБО — никаких «ноунеймов»
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GBO_SYSTEMS.map((system, i) => (
            <div key={system.name} className={`group glass hover:glass-strong rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-scale-in delay-${(i % 3) + 1}`}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary font-black text-lg group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                  {system.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{system.name}</h3>
                  <span className="text-white/30 text-sm">{system.country}</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
