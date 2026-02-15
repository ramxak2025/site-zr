"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { CAR_BRANDS, GBO_SYSTEMS, generateSlug } from "@/lib/data";
import type { Installation } from "@/lib/data";

export default function EditInstallation({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Installation | null>(null);

  useEffect(() => {
    fetch(`/api/installations/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setForm(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  function updateField(field: string, value: string | boolean | number) {
    setForm((prev) => (prev ? { ...prev, [field]: value } : null));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setSaving(true);

    const slug = generateSlug(form.carBrand, form.carModel, form.year);
    const updated = { ...form, slug };

    const res = await fetch(`/api/installations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      router.push("/admin/installations");
    } else {
      setSaving(false);
      alert("Ошибка при сохранении");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!form) {
    return <div className="text-gray-400 text-center py-20">Установка не найдена</div>;
  }

  const selectedBrand = CAR_BRANDS.find((b) => b.name === form.carBrand);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">
        Редактирование: {form.carBrand} {form.carModel} {form.year}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4">Информация об автомобиле</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Марка</label>
              <select
                value={form.carBrand}
                onChange={(e) => {
                  updateField("carBrand", e.target.value);
                  updateField("carModel", "");
                }}
                required
                className="admin-input"
              >
                <option value="">Выберите</option>
                {CAR_BRANDS.map((b) => (
                  <option key={b.slug} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Модель</label>
              <select
                value={form.carModel}
                onChange={(e) => updateField("carModel", e.target.value)}
                required
                className="admin-input"
              >
                <option value="">Выберите</option>
                {selectedBrand?.models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Год</label>
              <input
                type="text"
                value={form.year}
                onChange={(e) => updateField("year", e.target.value)}
                required
                className="admin-input"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Объём двигателя</label>
              <input
                type="text"
                value={form.engineVolume}
                onChange={(e) => updateField("engineVolume", e.target.value)}
                className="admin-input"
              />
            </div>
          </div>
        </div>

        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4">Информация о ГБО</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Система ГБО</label>
              <select
                value={form.gboSystem}
                onChange={(e) => updateField("gboSystem", e.target.value)}
                required
                className="admin-input"
              >
                <option value="">Выберите</option>
                {GBO_SYSTEMS.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Поколение</label>
              <select
                value={form.gboGeneration}
                onChange={(e) => updateField("gboGeneration", e.target.value)}
                className="admin-input"
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
                className="admin-input"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Стоимость (₽)</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => updateField("price", parseInt(e.target.value) || 0)}
                className="admin-input"
              />
            </div>
          </div>
        </div>

        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4">Описание</h2>
          <textarea
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            rows={4}
            className="admin-input resize-none"
          />
        </div>

        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4">SEO</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO заголовок</label>
              <input
                type="text"
                value={form.seoTitle}
                onChange={(e) => updateField("seoTitle", e.target.value)}
                className="admin-input"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO описание</label>
              <textarea
                value={form.seoDescription}
                onChange={(e) => updateField("seoDescription", e.target.value)}
                rows={2}
                className="admin-input resize-none"
              />
            </div>
          </div>
        </div>

        <div className="admin-card p-6">
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
              {form.published ? "Опубликовано" : "Черновик"}
            </span>
          </label>
        </div>

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
