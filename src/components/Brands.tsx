import { GBO_SYSTEMS } from "@/lib/data";

export default function Brands() {
  return (
    <section className="py-24 md:py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div>
            <span className="section-num">04 / ОБОРУДОВАНИЕ</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-[0.95]">
              Проверенные <span className="text-white/20">бренды</span>
            </h2>
          </div>
          <div className="flex items-end lg:justify-end">
            <p className="text-white/30 text-lg max-w-md">
              Работаем с ведущими европейскими производителями ГБО — никаких «ноунеймов»
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {GBO_SYSTEMS.map((system) => (
            <div key={system.name} className="card group p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {system.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{system.name}</h3>
                  <span className="text-white/20 text-sm">{system.country}</span>
                </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
