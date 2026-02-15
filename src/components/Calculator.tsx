"use client";

import { useState, useMemo } from "react";
import { FUEL_PRICES, formatPrice } from "@/lib/data";
import Link from "next/link";

interface CalculatorProps {
  compact?: boolean;
}

export default function Calculator({ compact = false }: CalculatorProps) {
  const [fuelType, setFuelType] = useState<"gasoline92" | "gasoline95" | "gasoline98">("gasoline95");
  const [consumption, setConsumption] = useState(10);
  const [mileage, setMileage] = useState(1500);
  const [installCost, setInstallCost] = useState(30000);

  const result = useMemo(() => {
    const gasolinePrice = FUEL_PRICES[fuelType];
    const lpgPrice = FUEL_PRICES.lpg;
    const lpgConsumption = consumption * 1.15;

    const monthlyGasolineCost = (mileage / 100) * consumption * gasolinePrice;
    const monthlyLpgCost = (mileage / 100) * lpgConsumption * lpgPrice;
    const monthlySaving = monthlyGasolineCost - monthlyLpgCost;
    const yearlySaving = monthlySaving * 12;
    const paybackMonths = monthlySaving > 0 ? Math.ceil(installCost / monthlySaving) : 0;

    return {
      monthlyGasolineCost: Math.round(monthlyGasolineCost),
      monthlyLpgCost: Math.round(monthlyLpgCost),
      monthlySaving: Math.round(monthlySaving),
      yearlySaving: Math.round(yearlySaving),
      paybackMonths,
      savingPercent: Math.round((monthlySaving / monthlyGasolineCost) * 100),
    };
  }, [fuelType, consumption, mileage, installCost]);

  const fuelLabels: Record<string, string> = {
    gasoline92: "АИ-92",
    gasoline95: "АИ-95",
    gasoline98: "АИ-98",
  };

  return (
    <section id="calculator" className={compact ? "" : "py-24 md:py-32 bg-surface"}>
      <div className={compact ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        {!compact && (
          <div className="mb-16">
            <span className="section-label">Калькулятор</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Рассчитайте <span className="text-text-muted">экономию</span>
            </h2>
          </div>
        )}

        <div className={`grid ${compact ? "gap-8" : "lg:grid-cols-2 gap-6"}`}>
          {/* Input panel */}
          <div className="card p-7 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
              <h3 className="text-text font-bold">Параметры</h3>
            </div>

            {/* Fuel type */}
            <div className="mb-8">
              <label className="text-text-muted text-xs tracking-wider uppercase mb-3 block">Тип топлива</label>
              <div className="flex gap-1.5">
                {(["gasoline92", "gasoline95", "gasoline98"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFuelType(type)}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                      fuelType === type
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-surface-alt text-text-secondary hover:text-text border border-border"
                    }`}
                  >
                    {fuelLabels[type]}
                  </button>
                ))}
              </div>
              <div className="text-right text-xs text-text-muted mt-2">
                {FUEL_PRICES[fuelType]} ₽/л &bull; Газ {FUEL_PRICES.lpg} ₽/л
              </div>
            </div>

            {/* Sliders */}
            {[
              { label: "Расход топлива", value: consumption, unit: "л/100 км", min: 5, max: 25, step: 0.5, onChange: (v: number) => setConsumption(v) },
              { label: "Пробег в месяц", value: mileage, unit: "км", min: 500, max: 5000, step: 100, onChange: (v: number) => setMileage(v), format: true },
              { label: "Стоимость установки", value: installCost, unit: "₽", min: 20000, max: 60000, step: 1000, onChange: (v: number) => setInstallCost(v), format: true },
            ].map((slider) => (
              <div key={slider.label} className="mb-8">
                <div className="flex justify-between mb-3">
                  <label className="text-text-muted text-xs tracking-wider uppercase">{slider.label}</label>
                  <span className="text-text font-bold text-sm text-display">
                    {slider.format ? formatPrice(slider.value) : slider.value} {slider.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={slider.value}
                  onChange={(e) => slider.onChange(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Result panel */}
          <div className="flex flex-col gap-4">
            {/* Main saving */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/15 p-8 flex-1 flex flex-col justify-center">
              <div className="absolute top-2 right-4 text-[6rem] font-black text-primary/[0.06] text-display leading-none select-none">
                {result.savingPercent}%
              </div>
              <div className="relative">
                <div className="text-text-muted text-xs tracking-wider uppercase mb-2">Экономия в месяц</div>
                <div className="text-5xl sm:text-6xl font-black text-text text-display mb-2">
                  {formatPrice(result.monthlySaving)} ₽
                </div>
                <div className="text-primary font-bold text-sm">
                  {result.savingPercent}% экономии на топливе
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Экономия в год", value: `${formatPrice(result.yearlySaving)} ₽`, accent: false },
                { label: "Окупаемость", value: `${result.paybackMonths} мес`, accent: false },
                { label: "Бензин / мес", value: `${formatPrice(result.monthlyGasolineCost)} ₽`, accent: true },
                { label: "Газ / мес", value: `${formatPrice(result.monthlyLpgCost)} ₽`, accent: false },
              ].map((stat) => (
                <div key={stat.label} className="card p-5">
                  <div className="text-text-muted text-xs tracking-wider uppercase mb-1">{stat.label}</div>
                  <div className={`font-bold text-xl text-display ${stat.accent ? "text-primary" : "text-text"}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="card p-5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <div className="text-text font-semibold">Готовы экономить?</div>
                <div className="text-text-muted text-sm">Бесплатная консультация</div>
              </div>
              <a
                href="https://wa.me/79884444485"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 text-sm rounded-xl transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
              >
                Записаться
              </a>
            </div>

            {!compact && (
              <Link href="/installations" className="text-center text-primary hover:text-primary-light text-sm font-medium transition-colors duration-300 py-2">
                Смотреть примеры установок &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
