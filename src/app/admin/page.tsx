"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Installation } from "@/lib/data";

export default function AdminDashboard() {
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/installations")
      .then((r) => r.json())
      .then((data) => {
        setInstallations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const published = installations.filter((i) => i.published).length;
  const drafts = installations.filter((i) => !i.published).length;
  const brands = new Set(installations.map((i) => i.carBrand)).size;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Панель управления</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Всего установок", value: installations.length, color: "text-white" },
          { label: "Опубликовано", value: published, color: "text-primary" },
          { label: "Черновики", value: drafts, color: "text-accent" },
          { label: "Марок авто", value: brands, color: "text-blue-400" },
        ].map((stat) => (
          <div key={stat.label} className="admin-card rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
            <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Link
          href="/admin/installations/new"
          className="bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl p-6 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </div>
            <div>
              <div className="text-white font-bold">Добавить установку</div>
              <div className="text-gray-400 text-sm">Создать новый пример работы</div>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/installations"
          className="admin-card hover:bg-[#222226] rounded-xl p-6 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
            </div>
            <div>
              <div className="text-white font-bold">Управление установками</div>
              <div className="text-gray-400 text-sm">Редактировать и удалять</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent installations */}
      <h2 className="text-lg font-bold text-white mb-4">Последние добавленные</h2>
      <div className="admin-card rounded-xl overflow-hidden">
        {installations.slice(0, 5).map((inst) => (
          <Link
            key={inst.id}
            href={`/admin/installations/${inst.id}`}
            className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
          >
            <div className="flex items-center gap-4">
              <div className={`w-2 h-2 rounded-full ${inst.published ? "bg-primary" : "bg-gray-500"}`} />
              <div>
                <div className="text-white font-medium">{inst.carBrand} {inst.carModel} {inst.year}</div>
                <div className="text-gray-500 text-sm">{inst.gboSystem} • {inst.createdAt}</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
