import { GBO_SYSTEMS } from "@/lib/data";

export default function Brands() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div>
            <span className="section-label">Оборудование</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Проверенные <span className="text-text-muted">бренды</span>
            </h2>
          </div>
          <div className="flex items-end lg:justify-end">
            <p className="text-text-secondary text-lg max-w-md leading-relaxed">
              Работаем с ведущими европейскими производителями ГБО — никаких &laquo;ноунеймов&raquo;
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GBO_SYSTEMS.map((system) => (
            <div
              key={system.name}
              className="card group p-7 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center text-white font-black text-xl">
                  {system.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-text font-bold text-lg">{system.name}</h3>
                  <span className="text-text-muted text-sm">{system.country}</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
