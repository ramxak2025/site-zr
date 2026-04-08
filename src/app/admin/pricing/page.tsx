"use client";

import { useState, useEffect } from "react";
import { adminFetch } from "@/lib/admin-client";
import type { InstallationPricing, InstallationPriceItem } from "@/lib/content";

type PricingKey = keyof InstallationPricing;

const FIELDS: { key: PricingKey; title: string; subtitle: string; icon: string }[] = [
  { key: "cyl4", title: "4 цилиндра", subtitle: "Kia, Hyundai, VW, Skoda, Lada", icon: "4" },
  { key: "cyl6", title: "6 цилиндров", subtitle: "Toyota, Nissan, Ford, Hyundai", icon: "6" },
  { key: "cyl8", title: "8 цилиндров", subtitle: "BMW, Mercedes, Land Cruiser", icon: "8" },
  { key: "directInjection", title: "Непосредственный впрыск", subtitle: "FSI / TSI / GDI / SkyActiv", icon: "DI" },
];

export default function AdminPricingPage() {
  const [data, setData] = useState<InstallationPricing | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((content) => {
        setData(content.pricing);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function update(key: PricingKey, patch: Partial<InstallationPriceItem>) {
    if (!data) return;
    setData({ ...data, [key]: { ...data[key], ...patch } });
  }

  async function save() {
    if (!data) return;
    setSaving(true);
    try {
      const res = await adminFetch("/api/content", {
        method: "PUT",
        body: JSON.stringify({ section: "pricing", data }),
      });
      if (res.ok) {
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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Цены на установку ГБО</h1>
        <p className="text-gray-400 text-sm mt-1">
          Актуальные базовые цены, отображаются на сайте и используются в карточке стоимости
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {FIELDS.map((field) => {
          const item = data[field.key];
          return (
            <div key={field.key} className="admin-card rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black text-xl shrink-0">
                  {field.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold">{field.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{field.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 tracking-wider uppercase">
                    Цена, ₽
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      step={500}
                      value={item.price}
                      onChange={(e) => update(field.key, { price: Number(e.target.value) })}
                      className="admin-input pr-14 text-2xl font-black tabular-nums"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₽</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 tracking-wider uppercase">
                    Описание (какие машины подходят)
                  </label>
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => update(field.key, { note: e.target.value })}
                    className="admin-input"
                    placeholder="Kia, Hyundai, VW..."
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="admin-card rounded-2xl p-5 bg-primary/5 border-primary/10 mb-6">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
          <div className="text-sm text-gray-300">
            Цены отображаются в карточке «Стоимость установки» на главной странице и учитываются в калькуляторе при автоподборе стоимости.
          </div>
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
