"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Installation } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export default function AdminInstallations() {
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetch("/api/installations")
      .then((r) => r.json())
      .then((data) => {
        setInstallations(data);
        setLoading(false);
      });
  }

  async function handleDelete(id: string) {
    if (!confirm("Удалить эту установку?")) return;
    await fetch(`/api/installations/${id}`, { method: "DELETE" });
    loadData();
  }

  async function togglePublish(id: string, published: boolean) {
    const inst = installations.find((i) => i.id === id);
    if (!inst) return;
    await fetch(`/api/installations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Управление установками</h1>
        <Link
          href="/admin/installations/new"
          className="bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Добавить
        </Link>
      </div>

      <div className="bg-surface-light rounded-xl border border-white/5 overflow-hidden">
        {installations.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Пока нет установок. Добавьте первую!
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {installations.map((inst) => (
              <div key={inst.id} className="p-4 hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <button
                      onClick={() => togglePublish(inst.id, inst.published)}
                      className={`w-3 h-3 rounded-full shrink-0 transition-colors ${
                        inst.published ? "bg-primary hover:bg-primary-light" : "bg-gray-500 hover:bg-gray-400"
                      }`}
                      title={inst.published ? "Опубликовано" : "Черновик"}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-medium truncate">
                        {inst.carBrand} {inst.carModel} {inst.year}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {inst.gboSystem} • {inst.gboGeneration} пок. • {formatPrice(inst.price)} ₽
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <a
                      href={`/installations/${inst.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                      title="Смотреть"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
