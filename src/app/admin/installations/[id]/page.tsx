"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { adminFetch } from "@/lib/admin-client";
import { CAR_BRANDS, GBO_SYSTEMS, generateSlug } from "@/lib/data";
import type { Installation } from "@/lib/data";

export default function EditInstallation({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState<Installation | null>(null);

  useEffect(() => {
    fetch(`/api/installations/${id}`)
      .then((r) => r.json())
      .then((data) => { setForm(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  function updateField(field: string, value: string | boolean | number | string[]) {
    setForm((prev) => (prev ? { ...prev, [field]: value } : null));
  }

  function addImage() {
    if (!form) return;
    const url = imageUrl.trim();
    if (!url) return;
    updateField("images", [...(form.images || []), url]);
    setImageUrl("");
  }

  function removeImage(index: number) {
    if (!form) return;
    updateField("images", form.images.filter((_, i) => i !== index));
  }

  function moveImage(index: number, direction: -1 | 1) {
    if (!form) return;
    const newImages = [...form.images];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newImages.length) return;
    [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
    updateField("images", newImages);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setSaving(true);

    const slug = generateSlug(form.carBrand, form.carModel, form.year);
    const updated = { ...form, slug };

    const res = await adminFetch(`/api/installations/${id}`, {
      method: "PUT",
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
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">{form.carBrand} {form.carModel} {form.year}</h1>
          <p className="text-gray-500 text-sm">Редактирование установки</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        {/* Car info */}
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25L6 6.375h12L20.625 14.25" /></svg>
            Автомобиль
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Марка</label>
              <select value={form.carBrand} onChange={(e) => { updateField("carBrand", e.target.value); updateField("carModel", ""); }} required className="admin-input">
                <option value="">Выберите</option>
                {CAR_BRANDS.map((b) => <option key={b.slug} value={b.name}>{b.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Модель</label>
              <select value={form.carModel} onChange={(e) => updateField("carModel", e.target.value)} required className="admin-input">
                <option value="">Выберите</option>
                {selectedBrand?.models.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Год</label>
              <input type="text" value={form.year} onChange={(e) => updateField("year", e.target.value)} required className="admin-input" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Объём двигателя</label>
              <input type="text" value={form.engineVolume} onChange={(e) => updateField("engineVolume", e.target.value)} className="admin-input" />
            </div>
          </div>
        </div>

        {/* GBO info */}
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M11.42 15.17l-5.87-3.1a.75.75 0 010-1.32l5.87-3.1a.75.75 0 01.76 0l5.87 3.1a.75.75 0 010 1.32l-5.87 3.1a.75.75 0 01-.76 0z" /><path d="M5.55 13.09l5.87 3.1a.75.75 0 00.76 0l5.87-3.1" /></svg>
            Оборудование ГБО
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Система ГБО</label>
              <select value={form.gboSystem} onChange={(e) => updateField("gboSystem", e.target.value)} required className="admin-input">
                <option value="">Выберите</option>
                {GBO_SYSTEMS.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Поколение</label>
              <select value={form.gboGeneration} onChange={(e) => updateField("gboGeneration", e.target.value)} className="admin-input">
                <option value="4">4 поколение</option>
                <option value="5">5 поколение</option>
                <option value="6">6 поколение</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Объём баллона</label>
              <input type="text" value={form.cylinderVolume} onChange={(e) => updateField("cylinderVolume", e.target.value)} className="admin-input" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Стоимость (₽)</label>
              <input type="number" value={form.price} onChange={(e) => updateField("price", parseInt(e.target.value) || 0)} className="admin-input" />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
            Фотографии
            {form.images?.length > 0 && <span className="text-gray-500 text-sm font-normal">({form.images.length})</span>}
          </h2>
          {form.images && form.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {form.images.map((img, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden bg-black/20 aspect-[4/3]">
                  <Image src={img} alt={`Фото ${i + 1}`} fill className="object-cover" sizes="200px" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                    {i > 0 && (
                      <button type="button" onClick={() => moveImage(i, -1)} className="p-1.5 bg-white/20 rounded-lg hover:bg-white/40 text-white transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                      </button>
                    )}
                    <button type="button" onClick={() => removeImage(i)} className="p-1.5 bg-red-500/80 rounded-lg hover:bg-red-500 text-white transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    {i < form.images.length - 1 && (
                      <button type="button" onClick={() => moveImage(i, 1)} className="p-1.5 bg-white/20 rounded-lg hover:bg-white/40 text-white transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                      </button>
                    )}
                  </div>
                  {i === 0 && <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">Обложка</span>}
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addImage(); } }} placeholder="Вставьте ссылку на фото (URL)" className="admin-input flex-1" />
            <button type="button" onClick={addImage} disabled={!imageUrl.trim()} className="bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-medium px-4 py-2 rounded-xl transition-all shrink-0">
              Добавить
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-2">Первая фотография станет обложкой карточки</p>
        </div>

        {/* Description */}
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4">Описание</h2>
          <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} rows={4} className="admin-input resize-none" />
        </div>

        {/* SEO */}
        <div className="admin-card p-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            SEO
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO заголовок</label>
              <input type="text" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} className="admin-input" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">SEO описание</label>
              <textarea value={form.seoDescription} onChange={(e) => updateField("seoDescription", e.target.value)} rows={2} className="admin-input resize-none" />
            </div>
          </div>
        </div>

        {/* Publish */}
        <div className="admin-card p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className={`w-12 h-7 rounded-full p-1 transition-colors ${form.published ? "bg-primary" : "bg-gray-600"}`} onClick={() => updateField("published", !form.published)}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${form.published ? "translate-x-5" : "translate-x-0"}`} />
            </div>
            <span className="text-white font-medium">{form.published ? "Опубликовано" : "Черновик"}</span>
          </label>
        </div>

        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
            {saving ? "Сохранение..." : "Сохранить"}
          </button>
          <button type="button" onClick={() => router.back()} className="bg-white/5 hover:bg-white/10 text-gray-300 font-medium px-8 py-3 rounded-xl transition-colors">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
