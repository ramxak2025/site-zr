"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CAR_BRANDS, GBO_SYSTEMS, generateSlug } from "@/lib/data";

export default function NewInstallation() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    carBrand: "",
    carModel: "",
    year: new Date().getFullYear().toString(),
    engineType: "Бензин",
    engineVolume: "",
    gboSystem: "",
    gboGeneration: "4",
    cylinderVolume: "",
    price: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
    published: true,
  });

  const selectedBrand = CAR_BRANDS.find((b) => b.name === form.carBrand);

  function updateField(field: string, value: string | boolean) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };

      // Auto-generate SEO fields
      if (["carBrand", "carModel", "year"].includes(field)) {
        const brand = field === "carBrand" ? (value as string) : prev.carBrand;
        const model = field === "carModel" ? (value as string) : prev.carModel;
        const year = field === "year" ? (value as string) : prev.year;

        if (brand && model) {
          updated.seoTitle = `Установка ГБО на ${brand} ${model} ${year} в Махачкале — Цена | ZR AUTO`;
          updated.seoDescription = `Профессиональная установка ГБО на ${brand} ${model} ${year} в Махачкале. Итальянское оборудование. Гарантия 2 года. Экономия до 50%. ZR AUTO: +7 988 444-44-85`;
        }
      }

      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const slug = generateSlug(form.carBrand, form.carModel, form.year);
    const installation = {
      id: Date.now().toString(),
      slug,
      ...form,
      price: parseInt(form.price) || 0,
      images: [],
      createdAt: new Date().toISOString().split("T")[0],
    };

    const res = await fetch("/api/installations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(installation),
    });

    if (res.ok) {
      router.push("/admin/installations");
    } else {
      setSaving(false);
      alert("Ошибка при сохранении");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Добавить установку</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Car info */}
        <div className="bg-surface-light rounded-xl p-6 border border-white/5">
          <h2 className="text-white font-bold mb-4">Информация об автомобиле</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Марка *</label>
              <select
                value={form.carBrand}
                onChange={(e) => {
                  updateField("carBrand", e.target.value);
                  updateField("carModel", "");
                }}
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              >
                <option value="">Выберите марку</option>
                {CAR_BRANDS.map((b) => (
                  <option key={b.slug} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Модель *</label>
              <select
                value={form.carModel}
                onChange={(e) => updateField("carModel", e.target.value)}
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              >
                <option value="">Выберите модель</option>
                {selectedBrand?.models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Год выпуска *</label>
              <input
                type="text"
                value={form.year}
                onChange={(e) => updateField("year", e.target.value)}
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Объём двигателя *</label>
              <input
                type="text"
                value={form.engineVolume}
                onChange={(e) => updateField("engineVolume", e.target.value)}
                placeholder="1.6"
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* GBO info */}
        <div className="bg-surface-light rounded-xl p-6 border border-white/5">
          <h2 className="text-white font-bold mb-4">Информация о ГБО</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Система ГБО *</label>
              <select
                value={form.gboSystem}
                onChange={(e) => updateField("gboSystem", e.target.value)}
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              >
                <option value="">Выберите систему</option>
                {GBO_SYSTEMS.map((s) => (
                  <option key={s.name} value={s.name}>{s.name} ({s.country})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Поколение *</label>
              <select
                value={form.gboGeneration}
                onChange={(e) => updateField("gboGeneration", e.target.value)}
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              >
                <option value="4">4 поколение</option>
                <option value="5">5 поколение</option>
                <option value="6">6 поколение</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Объём баллона</label>
              <input
                type="text"
                value={form.cylinderVolume}
                onChange={(e) => updateField("cylinderVolume", e.target.value)}
                placeholder="42л"
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Стоимость (₽) *</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => updateField("price", e.target.value)}
                placeholder="30000"
                required
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface-light rounded-xl p-6 border border-white/5">
          <h2 className="text-white font-bold mb-4">Описание</h2>
          <textarea
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Опишите выполненную работу..."
            rows={4}
            className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none resize-none"
          />
        </div>

        {/* SEO */}
        <div className="bg-surface-light rounded-xl p-6 border border-white/5">
          <h2 className="text-white font-bold mb-4">SEO настройки</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO заголовок</label>
              <input
                type="text"
                value={form.seoTitle}
                onChange={(e) => updateField("seoTitle", e.target.value)}
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none"
              />
              <div className="text-gray-500 text-xs mt-1">{form.seoTitle.length}/70 символов</div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO описание</label>
              <textarea
                value={form.seoDescription}
                onChange={(e) => updateField("seoDescription", e.target.value)}
                rows={2}
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none resize-none"
              />
              <div className="text-gray-500 text-xs mt-1">{form.seoDescription.length}/160 символов</div>
            </div>
          </div>
        </div>

        {/* Publish toggle */}
        <div className="bg-surface-light rounded-xl p-6 border border-white/5">
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              className={`w-12 h-7 rounded-full p-1 transition-colors ${
                form.published ? "bg-primary" : "bg-gray-600"
              }`}
              onClick={() => updateField("published", !form.published)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  form.published ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-white font-medium">
              {form.published ? "Опубликовать сразу" : "Сохранить как черновик"}
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            {saving ? "Сохранение..." : "Сохранить"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-white/5 hover:bg-white/10 text-gray-300 font-medium px-8 py-3 rounded-xl transition-colors"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
