"use client";

import ScrollReveal from "./ScrollReveal";
import type { ContactsContent, BackgroundSettings } from "@/lib/content";

const WA_ICON = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

export default function CTA({ contacts }: { contacts?: ContactsContent; bgSettings?: BackgroundSettings }) {
  const phone = contacts?.phone ?? "+7 988 444-44-85";
  const phoneRaw = contacts?.phoneRaw ?? "+79884444485";
  const whatsapp = contacts?.whatsappUrl ?? "https://wa.me/79884444485";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-dark">
      {/* BG mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento CTA Grid — 12 cols */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5">

          {/* Main CTA — large card */}
          <ScrollReveal animation="scale" className="md:col-span-6 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="badge badge-dark mb-6 bg-white/20 border-white/20 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white anim-pulse" />
                  Не откладывайте
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.95] tracking-tight mb-4">
                  Каждый день без газа —
                  <br />
                  <span className="text-white/70">деньги на ветер</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
                  При пробеге 1 500 км/мес вы переплачиваете за бензин{" "}
                  <span className="text-white font-semibold">~4 000 ₽ каждый месяц</span>
                </p>
              </div>
              <div className="relative flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary font-black px-7 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl shadow-lg shadow-black/20"
                >
                  {WA_ICON}
                  Записаться бесплатно
                </a>
                <a
                  href={`tel:${phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-4 text-lg rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  {phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats column */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-1 gap-4 md:gap-5">
            {/* Monthly savings */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/15 to-transparent border border-emerald-500/20 p-6 md:p-8 hover:border-emerald-500/30 transition-all">
                <div className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-2">Ежемесячная экономия</div>
                <div className="text-4xl md:text-5xl font-black text-white tabular-nums">
                  ~4 000 <span className="text-emerald-400 text-2xl">₽</span>
                </div>
                <div className="text-white/50 text-sm mt-2">при среднем пробеге 1 500 км/мес</div>
              </div>
            </ScrollReveal>

            {/* Payback */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 hover:bg-white/[0.06] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Окупаемость 3-6 мес</div>
                    <div className="text-white/50 text-sm">Начните экономить уже на этой неделе</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Schedule */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 hover:bg-white/[0.06] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Пн-Вс 9:00 — 19:00</div>
                    <div className="text-white/50 text-sm">Пт с 14:00 / Без выходных</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
