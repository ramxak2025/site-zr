"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { adminFetch } from "@/lib/admin-client";
import type { Installation } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export default function AdminInstallations() {
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(() => {
    fetch("/api/installations")
      .then((r) => r.json())
      .then((data) => {
        setInstallations(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function handleDelete(id: string) {
    if (!confirm("Удалить эту установку?")) return;
    await adminFetch(`/api/installations/${id}`, { method: "DELETE" });
    loadData();
  }

  async function togglePublish(id: string, published: boolean) {
    const inst = installations.find((i) => i.id === id);
    if (!inst) return;
    await adminFetch(`/api/installations/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...inst, published: !published }),
    });
    loadData();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const published = installations.filter((i) => i.published).length;
  const drafts = installations.length - published;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Установки</h1>
          <p className="text-gray-500 text-sm mt-1">
            {installations.length} всего / {published} опубликовано / {drafts} черновиков
          </p>
        </div>
        <Link
          href="/admin/installations/new"
          className="bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Добавить
        </Link>
      </div>

      <div className="admin-card rounded-xl overflow-hidden">
        {installations.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
            <div className="text-gray-400 font-medium mb-2">Пока нет установок</div>
            <Link href="/admin/installations/new" className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
              Добавить первую
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {installations.map((inst) => (
              <div key={inst.id} className="p-4 hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-white/5 shrink-0 relative">
                    {inst.images && inst.images.length > 0 ? (
                      <Image src={inst.images[0]} alt="" fill className="object-cover" sizes="64px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${inst.published ? "bg-emerald-400" : "bg-gray-500"}`} />
                      <span className="text-white font-medium truncate">
                        {inst.carBrand} {inst.carModel} {inst.year}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5">
                      {inst.gboSystem} / {inst.gboGeneration} пок. / {formatPrice(inst.price)} ₽
                      {inst.images?.length > 0 && <span className="ml-2 text-gray-600">{inst.images.length} фото</span>}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => togglePublish(inst.id, inst.published)}
                      className={`p-2 rounded-lg transition-all text-sm ${
                        inst.published
                          ? "text-emerald-400 hover:bg-emerald-400/10"
                          : "text-gray-500 hover:bg-white/5"
                      }`}
                      title={inst.published ? "Снять с публикации" : "Опубликовать"}
                    >
                      {inst.published ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      )}
                    </button>
                    <a
                      href={`/installations/${inst.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                      title="Смотреть на сайте"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                    </a>
                    <Link
                      href={`/admin/installations/${inst.id}`}
                      className="p-2 text-gray-500 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                      title="Редактировать"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(inst.id)}
                      className="p-2 text-gray-500 hover:text-red-400 rounded-lg hover:bg-red-400/5 transition-all"
                      title="Удалить"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
