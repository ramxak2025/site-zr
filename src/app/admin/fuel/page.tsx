"use client";

import { useState, useEffect } from "react";
import { adminFetch } from "@/lib/admin-client";
import type { FuelPricesContent } from "@/lib/content";

type FuelKey = "gasoline92" | "gasoline95" | "gasoline98" | "lpg";

const FIELDS: { key: FuelKey; title: string; subtitle: string; color: string }[] = [
  { key: "gasoline92", title: "АИ-92", subtitle: "Бензин 92-й", color: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400" },
  { key: "gasoline95", title: "АИ-95", subtitle: "Бензин 95-й", color: "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400" },
  { key: "gasoline98", title: "АИ-98", subtitle: "Бензин 98-й", color: "from-red-500/20 to-red-500/5 border-red-500/30 text-red-400" },
  { key: "lpg", title: "Газ", subtitle: "Сжиженный (LPG)", color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400" },
];

export default function AdminFuelPage() {
  const [data, setData] = useState<FuelPricesContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((content) => {
        setData(content.fuelPrices);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function update(key: FuelKey, value: number) {
    if (!data) return;
    setData({ ...data, [key]: value });
  }

  async function save() {
    if (!data) return;
    setSaving(true);
    try {
      const payload = { ...data, updatedAt: new Date().toISOString().split("T")[0] };
      const res = await adminFetch("/api/content", {
        method: "PUT",
        body: JSON.stringify({ section: "fuelPrices", data: payload }),
      });
      if (res.ok) {
        setData(payload);
        setToast("Цены обновлены!");
      } else {
        const err = await res.json().catch(() => ({}));
        setToast(err.error || "Ошибка сохранения");
      }
    } finally {
      setSaving(false);
      setTimeout(() => setToast(""), 2500);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return <div className="admin-card p-8 text-red-400">Не удалось загрузить цены</div>;
  }

  const economyPct = Math.round((1 - data.lpg / data.gasoline95) * 100);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Цены на топливо</h1>
        <p className="text-gray-400 text-sm mt-1">
          Актуальные цены, используемые в калькуляторе экономии. Обновляйте регулярно.
        </p>
        {data.updatedAt && (
          <p className="text-gray-500 text-xs mt-1">Последнее обновление: {data.updatedAt}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {FIELDS.map((field) => {
          const val = data[field.key];
          return (
            <div key={field.key} className={`admin-card rounded-2xl p-5 bg-gradient-to-br ${field.color}`}>
              <div className="text-white font-bold text-lg">{field.title}</div>
              <div className="text-gray-400 text-xs mb-4">{field.subtitle}</div>

              <div className="relative">
                <input
                  type="number"
                  step={0.1}
                  min={0}
                  value={val}
                  onChange={(e) => update(field.key, Number(e.target.value))}
                  className="admin-input pr-14 text-3xl font-black tabular-nums text-center"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">₽/л</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="admin-card rounded-2xl p-6 mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
          <div className="w-1 h-6 rounded-full bg-gradient-to-b from-emerald-400 to-primary" />
          Сравнение стоимости топлива
        </h3>

        <div className="flex items-baseline gap-4 mb-6">
          <div className="text-5xl font-black text-emerald-400 tabular-nums">{economyPct}%</div>
          <div className="text-gray-400 text-sm">
            экономия при переходе с АИ-95 на газ
          </div>
        </div>

        <div className="space-y-3">
          {(["gasoline92", "gasoline95", "gasoline98"] as const).map((type) => {
            const diff = data[type] - data.lpg;
            const maxDiff = data.gasoline98 - data.lpg;
            const pct = (diff / maxDiff) * 100;
            return (
              <div key={type}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">
                    {type === "gasoline92" ? "АИ-92" : type === "gasoline95" ? "АИ-95" : "АИ-98"} vs Газ
                  </span>
                  <span className="text-white font-bold tabular-nums">
                    −{diff.toFixed(1)} ₽/л
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-primary rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={save}
          disabled={saving}
          className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
        >
          {saving ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
          )}
          {saving ? "Сохранение..." : "Сохранить цены"}
        </button>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
          {toast}
        </div>
      )}
    </div>
  );
}
