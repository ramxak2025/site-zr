"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  SiteContent, HeroContent, ServiceItem, ReviewItem,
  ReviewPlatform, ContactsContent, AboutContent,
} from "@/lib/content";

/* ── Helpers ────────────────────────────────────────── */
type Tab = "hero" | "services" | "reviews" | "contacts" | "about";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "hero", label: "Главная", icon: "home" },
  { id: "services", label: "Услуги", icon: "list" },
  { id: "reviews", label: "Отзывы", icon: "star" },
  { id: "contacts", label: "Контакты", icon: "phone" },
  { id: "about", label: "О компании", icon: "info" },
];

function SaveBtn({ saving, onClick }: { saving: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2"
    >
      {saving ? (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
      )}
      {saving ? "Сохранение..." : "Сохранить"}
    </button>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="admin-card rounded-2xl p-6 md:p-8">
      <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <label className="block text-gray-400 text-sm font-medium mb-1.5">{text}</label>;
}

function Input({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="admin-input"
    />
  );
}

function Textarea({ value, onChange, rows = 3 }: { value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="admin-input resize-y"
    />
  );
}

/* ── Main Component ─────────────────────────────────── */
export default function ContentEditor() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => { setContent(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const save = useCallback(async (section: keyof SiteContent, data: unknown) => {
    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, data }),
      });
      if (res.ok) {
        setToast("Сохранено!");
        setTimeout(() => setToast(""), 2500);
      }
    } finally {
      setSaving(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="w-8 h-8 animate-spin text-primary" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      </div>
    );
  }

  if (!content) return <p className="text-red-400 p-8">Ошибка загрузки контента</p>;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Контент сайта</h1>
          <p className="text-gray-400 text-sm mt-1">Редактируйте тексты, цены, отзывы и контактную информацию</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              tab === t.id
                ? "bg-primary/10 text-primary"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "hero" && <HeroEditor hero={content.hero} onSave={(d) => { setContent({ ...content, hero: d }); save("hero", d); }} saving={saving} />}
      {tab === "services" && <ServicesEditor services={content.services} onSave={(d) => { setContent({ ...content, services: d }); save("services", d); }} saving={saving} />}
      {tab === "reviews" && <ReviewsEditor reviews={content.reviews} platforms={content.reviewPlatforms} onSaveReviews={(d) => { setContent({ ...content, reviews: d }); save("reviews", d); }} onSavePlatforms={(d) => { setContent({ ...content, reviewPlatforms: d }); save("reviewPlatforms", d); }} saving={saving} />}
      {tab === "contacts" && <ContactsEditor contacts={content.contacts} onSave={(d) => { setContent({ ...content, contacts: d }); save("contacts", d); }} saving={saving} />}
      {tab === "about" && <AboutEditor about={content.about} onSave={(d) => { setContent({ ...content, about: d }); save("about", d); }} saving={saving} />}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
          {toast}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   HERO EDITOR
   ══════════════════════════════════════════════════════ */
function HeroEditor({ hero, onSave, saving }: { hero: HeroContent; onSave: (d: HeroContent) => void; saving: boolean }) {
  const [data, setData] = useState(hero);
  const upd = (patch: Partial<HeroContent>) => setData((p) => ({ ...p, ...patch }));

  return (
    <div className="space-y-6">
      <SectionCard title="Заголовок и описание">
        <div className="space-y-4">
          <div>
            <Label text="Бейдж (над заголовком)" />
            <Input value={data.badge} onChange={(v) => upd({ badge: v })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label text="Строки заголовка (по одной)" />
              {data.headlineLines.map((line, i) => (
                <div key={i} className="mb-2">
                  <Input
                    value={line}
                    onChange={(v) => {
                      const lines = [...data.headlineLines];
                      lines[i] = v;
                      upd({ headlineLines: lines });
                    }}
                  />
                </div>
              ))}
              <button
                onClick={() => upd({ headlineLines: [...data.headlineLines, ""] })}
                className="text-primary text-sm hover:underline"
              >
                + Добавить строку
              </button>
            </div>
            <div>
              <Label text="Акцентный текст (градиент)" />
              <Input value={data.headlineAccent} onChange={(v) => upd({ headlineAccent: v })} />
            </div>
          </div>
          <div>
            <Label text="Описание" />
            <Textarea value={data.description} onChange={(v) => upd({ description: v })} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Контакты и CTA">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label text="Текст кнопки CTA" />
            <Input value={data.ctaText} onChange={(v) => upd({ ctaText: v })} />
          </div>
          <div>
            <Label text="Телефон" />
            <Input value={data.phone} onChange={(v) => upd({ phone: v })} />
          </div>
          <div className="md:col-span-2">
            <Label text="Ссылка WhatsApp" />
            <Input value={data.whatsappUrl} onChange={(v) => upd({ whatsappUrl: v })} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Цены (карточка справа)">
        <div className="space-y-4">
          {data.prices.map((price, i) => (
            <div key={i} className="grid grid-cols-12 gap-3 items-start">
              <div className="col-span-3">
                <Label text="Название" />
                <Input value={price.label} onChange={(v) => { const p = [...data.prices]; p[i] = { ...p[i], label: v }; upd({ prices: p }); }} />
              </div>
              <div className="col-span-3">
                <Label text="Цена" />
                <Input value={price.price} onChange={(v) => { const p = [...data.prices]; p[i] = { ...p[i], price: v }; upd({ prices: p }); }} />
              </div>
              <div className="col-span-4">
                <Label text="Описание" />
                <Input value={price.desc} onChange={(v) => { const p = [...data.prices]; p[i] = { ...p[i], desc: v }; upd({ prices: p }); }} />
              </div>
              <div className="col-span-1 pt-7">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={price.popular}
                    onChange={(e) => { const p = [...data.prices]; p[i] = { ...p[i], popular: e.target.checked }; upd({ prices: p }); }}
                    className="rounded border-gray-600"
                  />
                  <span className="text-gray-400 text-xs">ХИТ</span>
                </label>
              </div>
              <div className="col-span-1 pt-7">
                <button onClick={() => upd({ prices: data.prices.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => upd({ prices: [...data.prices, { label: "", price: "", desc: "", popular: false }] })}
            className="text-primary text-sm hover:underline"
          >
            + Добавить цену
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Статистика (полоска внизу)">
        <div className="space-y-3">
          {data.stats.map((stat, i) => (
            <div key={i} className="grid grid-cols-12 gap-3 items-start">
              <div className="col-span-2">
                <Label text="Число" />
                <input
                  type="number"
                  value={stat.end}
                  onChange={(e) => { const s = [...data.stats]; s[i] = { ...s[i], end: Number(e.target.value) }; upd({ stats: s }); }}
                  className="admin-input"
                />
              </div>
              <div className="col-span-2">
                <Label text="Префикс" />
                <Input value={stat.prefix || ""} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], prefix: v || undefined }; upd({ stats: s }); }} />
              </div>
              <div className="col-span-3">
                <Label text="Суффикс" />
                <Input value={stat.suffix} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], suffix: v }; upd({ stats: s }); }} />
              </div>
              <div className="col-span-4">
                <Label text="Подпись" />
                <Input value={stat.label} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], label: v }; upd({ stats: s }); }} />
              </div>
              <div className="col-span-1 pt-7">
                <button onClick={() => upd({ stats: data.stats.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <SaveBtn saving={saving} onClick={() => onSave(data)} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SERVICES EDITOR
   ══════════════════════════════════════════════════════ */
function ServicesEditor({ services, onSave, saving }: { services: ServiceItem[]; onSave: (d: ServiceItem[]) => void; saving: boolean }) {
  const [data, setData] = useState(services);

  return (
    <div className="space-y-6">
      {data.map((service, i) => (
        <SectionCard key={i} title={service.title || `Услуга ${i + 1}`}>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label text="Название" />
                <Input value={service.title} onChange={(v) => { const s = [...data]; s[i] = { ...s[i], title: v }; setData(s); }} />
              </div>
              <div>
                <Label text="Цена" />
                <Input value={service.price} onChange={(v) => { const s = [...data]; s[i] = { ...s[i], price: v }; setData(s); }} />
              </div>
            </div>
            <div>
              <Label text="Описание" />
              <Textarea value={service.description} onChange={(v) => { const s = [...data]; s[i] = { ...s[i], description: v }; setData(s); }} />
            </div>
            <div>
              <Label text="Преимущества (по одному)" />
              {service.features.map((f, fi) => (
                <div key={fi} className="flex gap-2 mb-2">
                  <Input
                    value={f}
                    onChange={(v) => {
                      const s = [...data];
                      const features = [...s[i].features];
                      features[fi] = v;
                      s[i] = { ...s[i], features };
                      setData(s);
                    }}
                  />
                  <button
                    onClick={() => {
                      const s = [...data];
                      s[i] = { ...s[i], features: s[i].features.filter((_, j) => j !== fi) };
                      setData(s);
                    }}
                    className="text-red-400 hover:text-red-300 shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
              <button
                onClick={() => { const s = [...data]; s[i] = { ...s[i], features: [...s[i].features, ""] }; setData(s); }}
                className="text-primary text-sm hover:underline"
              >
                + Добавить
              </button>
            </div>
            <button
              onClick={() => setData(data.filter((_, j) => j !== i))}
              className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
              Удалить услугу
            </button>
          </div>
        </SectionCard>
      ))}

      <button
        onClick={() => setData([...data, { title: "", description: "", price: "", features: [] }])}
        className="admin-card rounded-2xl p-6 w-full text-center text-gray-400 hover:text-primary hover:border-primary/20 transition-all border border-dashed border-gray-700"
      >
        + Добавить услугу
      </button>

      <div className="flex justify-end">
        <SaveBtn saving={saving} onClick={() => onSave(data)} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   REVIEWS EDITOR
   ══════════════════════════════════════════════════════ */
function ReviewsEditor({
  reviews, platforms, onSaveReviews, onSavePlatforms, saving,
}: {
  reviews: ReviewItem[];
  platforms: ReviewPlatform[];
  onSaveReviews: (d: ReviewItem[]) => void;
  onSavePlatforms: (d: ReviewPlatform[]) => void;
  saving: boolean;
}) {
  const [revData, setRevData] = useState(reviews);
  const [platData, setPlatData] = useState(platforms);

  return (
    <div className="space-y-6">
      <SectionCard title="Рейтинги платформ">
        <div className="space-y-3">
          {platData.map((p, i) => (
            <div key={i} className="grid grid-cols-3 gap-3">
              <div>
                <Label text="Платформа" />
                <Input value={p.name} onChange={(v) => { const d = [...platData]; d[i] = { ...d[i], name: v }; setPlatData(d); }} />
              </div>
              <div>
                <Label text="URL" />
                <Input value={p.url} onChange={(v) => { const d = [...platData]; d[i] = { ...d[i], url: v }; setPlatData(d); }} />
              </div>
              <div>
                <Label text="Рейтинг" />
                <Input value={p.rating} onChange={(v) => { const d = [...platData]; d[i] = { ...d[i], rating: v }; setPlatData(d); }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <SaveBtn saving={saving} onClick={() => onSavePlatforms(platData)} />
        </div>
      </SectionCard>

      {revData.map((review, i) => (
        <SectionCard key={i} title={review.name || `Отзыв ${i + 1}`}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <Label text="Имя" />
                <Input value={review.name} onChange={(v) => { const d = [...revData]; d[i] = { ...d[i], name: v }; setRevData(d); }} />
              </div>
              <div>
                <Label text="Автомобиль" />
                <Input value={review.car} onChange={(v) => { const d = [...revData]; d[i] = { ...d[i], car: v }; setRevData(d); }} />
              </div>
              <div>
                <Label text="Платформа" />
                <Input value={review.platform} onChange={(v) => { const d = [...revData]; d[i] = { ...d[i], platform: v }; setRevData(d); }} />
              </div>
              <div>
                <Label text="Рейтинг (1-5)" />
                <input
                  type="number"
                  min={1} max={5}
                  value={review.rating}
                  onChange={(e) => { const d = [...revData]; d[i] = { ...d[i], rating: Number(e.target.value) }; setRevData(d); }}
                  className="admin-input"
                />
              </div>
            </div>
            <div>
              <Label text="Текст отзыва" />
              <Textarea value={review.text} onChange={(v) => { const d = [...revData]; d[i] = { ...d[i], text: v }; setRevData(d); }} rows={2} />
            </div>
            <button
              onClick={() => setRevData(revData.filter((_, j) => j !== i))}
              className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
              Удалить отзыв
            </button>
          </div>
        </SectionCard>
      ))}

      <button
        onClick={() => setRevData([...revData, { name: "", car: "", text: "", rating: 5, platform: "Яндекс Карты" }])}
        className="admin-card rounded-2xl p-6 w-full text-center text-gray-400 hover:text-primary hover:border-primary/20 transition-all border border-dashed border-gray-700"
      >
        + Добавить отзыв
      </button>

      <div className="flex justify-end">
        <SaveBtn saving={saving} onClick={() => onSaveReviews(revData)} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   CONTACTS EDITOR
   ══════════════════════════════════════════════════════ */
function ContactsEditor({ contacts, onSave, saving }: { contacts: ContactsContent; onSave: (d: ContactsContent) => void; saving: boolean }) {
  const [data, setData] = useState(contacts);
  const upd = (patch: Partial<ContactsContent>) => setData((p) => ({ ...p, ...patch }));

  return (
    <div className="space-y-6">
      <SectionCard title="Основные контакты">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label text="Телефон (отображение)" />
            <Input value={data.phone} onChange={(v) => upd({ phone: v })} />
          </div>
          <div>
            <Label text="Телефон (для ссылки, без пробелов)" />
            <Input value={data.phoneRaw} onChange={(v) => upd({ phoneRaw: v })} />
          </div>
          <div>
            <Label text="WhatsApp URL" />
            <Input value={data.whatsappUrl} onChange={(v) => upd({ whatsappUrl: v })} />
          </div>
          <div>
            <Label text="Email" />
            <Input value={data.email} onChange={(v) => upd({ email: v })} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Адрес">
        <div className="space-y-4">
          <div>
            <Label text="Полный адрес" />
            <Input value={data.address} onChange={(v) => upd({ address: v })} />
          </div>
          <div>
            <Label text="Ориентир / доп. описание" />
            <Input value={data.addressDetail} onChange={(v) => upd({ addressDetail: v })} />
          </div>
          <div>
            <Label text="Ссылка на Яндекс Карты" />
            <Input value={data.mapUrl} onChange={(v) => upd({ mapUrl: v })} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Режим работы">
        <div className="space-y-3">
          {data.workHours.map((wh, i) => (
            <div key={i} className="grid grid-cols-5 gap-3 items-start">
              <div className="col-span-2">
                <Label text="Дни" />
                <Input value={wh.days} onChange={(v) => { const w = [...data.workHours]; w[i] = { ...w[i], days: v }; upd({ workHours: w }); }} />
              </div>
              <div className="col-span-2">
                <Label text="Часы" />
                <Input value={wh.hours} onChange={(v) => { const w = [...data.workHours]; w[i] = { ...w[i], hours: v }; upd({ workHours: w }); }} />
              </div>
              <div className="pt-7">
                <button onClick={() => upd({ workHours: data.workHours.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => upd({ workHours: [...data.workHours, { days: "", hours: "" }] })}
            className="text-primary text-sm hover:underline"
          >
            + Добавить
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Социальные сети">
        <div className="space-y-3">
          {data.socials.map((s, i) => (
            <div key={i} className="grid grid-cols-5 gap-3 items-start">
              <div className="col-span-2">
                <Label text="Название" />
                <Input value={s.name} onChange={(v) => { const sc = [...data.socials]; sc[i] = { ...sc[i], name: v }; upd({ socials: sc }); }} />
              </div>
              <div className="col-span-2">
                <Label text="URL" />
                <Input value={s.url} onChange={(v) => { const sc = [...data.socials]; sc[i] = { ...sc[i], url: v }; upd({ socials: sc }); }} />
              </div>
              <div className="pt-7">
                <button onClick={() => upd({ socials: data.socials.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => upd({ socials: [...data.socials, { name: "", url: "" }] })}
            className="text-primary text-sm hover:underline"
          >
            + Добавить
          </button>
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <SaveBtn saving={saving} onClick={() => onSave(data)} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ABOUT EDITOR
   ══════════════════════════════════════════════════════ */
function AboutEditor({ about, onSave, saving }: { about: AboutContent; onSave: (d: AboutContent) => void; saving: boolean }) {
  const [data, setData] = useState(about);
  const upd = (patch: Partial<AboutContent>) => setData((p) => ({ ...p, ...patch }));

  return (
    <div className="space-y-6">
      <SectionCard title="Описание">
        <div className="space-y-4">
          <div>
            <Label text="Краткое описание (баннер)" />
            <Textarea value={data.intro} onChange={(v) => upd({ intro: v })} />
          </div>
          <div>
            <Label text="История компании (абзацы)" />
            {data.history.map((p, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Textarea
                  value={p}
                  onChange={(v) => {
                    const h = [...data.history];
                    h[i] = v;
                    upd({ history: h });
                  }}
                  rows={2}
                />
                <button
                  onClick={() => upd({ history: data.history.filter((_, j) => j !== i) })}
                  className="text-red-400 hover:text-red-300 shrink-0 mt-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
            <button
              onClick={() => upd({ history: [...data.history, ""] })}
              className="text-primary text-sm hover:underline"
            >
              + Добавить абзац
            </button>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Статистика">
        <div className="space-y-3">
          {data.stats.map((stat, i) => (
            <div key={i} className="grid grid-cols-5 gap-3 items-start">
              <div className="col-span-2">
                <Label text="Значение" />
                <Input value={stat.value} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], value: v }; upd({ stats: s }); }} />
              </div>
              <div className="col-span-2">
                <Label text="Подпись" />
                <Input value={stat.label} onChange={(v) => { const s = [...data.stats]; s[i] = { ...s[i], label: v }; upd({ stats: s }); }} />
              </div>
              <div className="pt-7">
                <button onClick={() => upd({ stats: data.stats.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => upd({ stats: [...data.stats, { value: "", label: "" }] })} className="text-primary text-sm hover:underline">
            + Добавить
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Этапы работы">
        <div className="space-y-4">
          {data.steps.map((step, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-3 items-start">
              <div>
                <Label text="Заголовок" />
                <Input value={step.title} onChange={(v) => { const s = [...data.steps]; s[i] = { ...s[i], title: v }; upd({ steps: s }); }} />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <div className="flex-1">
                  <Label text="Описание" />
                  <Input value={step.description} onChange={(v) => { const s = [...data.steps]; s[i] = { ...s[i], description: v }; upd({ steps: s }); }} />
                </div>
                <button onClick={() => upd({ steps: data.steps.filter((_, j) => j !== i) })} className="text-red-400 hover:text-red-300 mt-7 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => upd({ steps: [...data.steps, { title: "", description: "" }] })} className="text-primary text-sm hover:underline">
            + Добавить этап
          </button>
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <SaveBtn saving={saving} onClick={() => onSave(data)} />
      </div>
    </div>
  );
}
