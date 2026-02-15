import { GBO_SYSTEMS } from "@/lib/data";

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Оборудование</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Работаем только с проверенными европейскими производителями ГБО
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GBO_SYSTEMS.map((system) => (
            <div
              key={system.name}
              className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-black text-lg group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  {system.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{system.name}</h3>
                  <span className="text-gray-500 text-sm">{system.country}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
