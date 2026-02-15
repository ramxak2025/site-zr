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
    const lpgConsumption = consumption * 1.15; // gas consumption ~15% higher

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
    <section id="calculator" className={`${compact ? "" : "py-20 md:py-28"} bg-surface`}>
      <div className={compact ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        {!compact && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Калькулятор окупаемости</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Рассчитайте, сколько вы сэкономите после установки ГБО
            </p>
          </div>
        )}

        <div className={`grid ${compact ? "gap-8" : "lg:grid-cols-2 gap-8 lg:gap-12"}`}>
          {/* Input panel */}
          <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="text-white font-bold text-lg mb-6">Параметры</h3>

            {/* Fuel type */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Тип топлива</label>
              <div className="flex gap-2">
                {(["gasoline92", "gasoline95", "gasoline98"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFuelType(type)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      fuelType === type
                        ? "bg-primary text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {fuelLabels[type]}
                  </button>
                ))}
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">
                {FUEL_PRICES[fuelType]} ₽/л • Газ {FUEL_PRICES.lpg} ₽/л
              </div>
            </div>

            {/* Consumption */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-gray-400 text-sm">Расход топлива</label>
                <span className="text-white font-medium text-sm">{consumption} л/100 км</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="0.5"
                value={consumption}
                onChange={(e) => setConsumption(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5 л</span>
                <span>25 л</span>
              </div>
            </div>

            {/* Monthly mileage */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-gray-400 text-sm">Пробег в месяц</label>
                <span className="text-white font-medium text-sm">{formatPrice(mileage)} км</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={mileage}
                onChange={(e) => setMileage(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>500 км</span>
                <span>5 000 км</span>
              </div>
            </div>

            {/* Install cost */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-400 text-sm">Стоимость установки</label>
                <span className="text-white font-medium text-sm">{formatPrice(installCost)} ₽</span>
              </div>
              <input
                type="range"
                min="20000"
                max="60000"
                step="1000"
                value={installCost}
                onChange={(e) => setInstallCost(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>20 000 ₽</span>
                <span>60 000 ₽</span>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="space-y-4">
            {/* Main saving card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <div className="text-gray-400 text-sm mb-1">Ваша экономия в месяц</div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                {formatPrice(result.monthlySaving)} ₽
              </div>
              <div className="text-primary font-medium">
                {result.savingPercent}% экономии на топливе
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-light rounded-xl p-4 border border-white/5">
                <div className="text-gray-400 text-xs mb-1">Экономия в год</div>
                <div className="text-white font-bold text-xl">{formatPrice(result.yearlySaving)} ₽</div>
              </div>
              <div className="bg-surface-light rounded-xl p-4 border border-white/5">
                <div className="text-gray-400 text-xs mb-1">Окупаемость</div>
                <div className="text-white font-bold text-xl">
                  {result.paybackMonths} {result.paybackMonths === 1 ? "мес" : result.paybackMonths < 5 ? "мес" : "мес"}
                </div>
              </div>
              <div className="bg-surface-light rounded-xl p-4 border border-white/5">
                <div className="text-gray-400 text-xs mb-1">Бензин в месяц</div>
                <div className="text-red-400 font-bold text-xl">{formatPrice(result.monthlyGasolineCost)} ₽</div>
              </div>
              <div className="bg-surface-light rounded-xl p-4 border border-white/5">
                <div className="text-gray-400 text-xs mb-1">Газ в месяц</div>
                <div className="text-primary font-bold text-xl">{formatPrice(result.monthlyLpgCost)} ₽</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface-light rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <div className="text-white font-semibold">Готовы экономить?</div>
                <div className="text-gray-400 text-sm">Запишитесь на бесплатную консультацию</div>
              </div>
              <a
                href="https://wa.me/79884444485"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap hover:shadow-lg hover:shadow-primary/25"
              >
                Записаться
              </a>
            </div>

            {!compact && (
              <div className="text-center">
                <Link href="/installations" className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
                  Смотреть примеры установок &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
