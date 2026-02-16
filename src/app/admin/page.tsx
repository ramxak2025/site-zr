"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Installation } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export default function AdminDashboard() {
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/installations")
      .then((r) => r.json())
      .then((data) => { setInstallations(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const published = installations.filter((i) => i.published).length;
  const drafts = installations.length - published;
  const brands = new Set(installations.map((i) => i.carBrand)).size;
  const latest = installations.slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Панель управления</h1>
        <p className="text-gray-500 text-sm mt-1">Добро пожаловать в админ-панель ZR AUTO</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Всего установок", value: installations.length, icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21", color: "text-blue-400" },
          { label: "Опубликовано", value: published, icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-emerald-400" },
          { label: "Черновики", value: drafts, icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z", color: "text-amber-400" },
          { label: "Марок авто", value: brands, icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25", color: "text-purple-400" },
        ].map((stat) => (
          <div key={stat.label} className="admin-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <svg className={`w-5 h-5 ${stat.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d={stat.icon} /></svg>
              <span className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="text-3xl font-black text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Link href="/admin/installations/new" className="admin-card p-5 hover:bg-white/[0.04] transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Новая установка</div>
              <div className="text-gray-500 text-xs">Добавить работу</div>
            </div>
          </div>
        </Link>
        <Link href="/admin/installations" className="admin-card p-5 hover:bg-white/[0.04] transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Все установки</div>
              <div className="text-gray-500 text-xs">Управление</div>
            </div>
          </div>
        </Link>
        <Link href="/admin/content" className="admin-card p-5 hover:bg-white/[0.04] transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Контент сайта</div>
              <div className="text-gray-500 text-xs">Hero, услуги, отзывы</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Latest installations */}
      {latest.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold">Последние установки</h2>
            <Link href="/admin/installations" className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
              Все
            </Link>
          </div>
          <div className="admin-card rounded-xl overflow-hidden divide-y divide-white/5">
            {latest.map((inst) => (
              <Link key={inst.id} href={`/admin/installations/${inst.id}`} className="p-4 flex items-center gap-4 hover:bg-white/[0.03] transition-colors">
                <div className="w-12 h-9 rounded-lg overflow-hidden bg-white/5 shrink-0 relative">
                  {inst.images?.length > 0 ? (
                    <Image src={inst.images[0]} alt="" fill className="object-cover" sizes="48px" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm truncate">{inst.carBrand} {inst.carModel} {inst.year}</div>
                  <div className="text-gray-500 text-xs">{inst.gboSystem} / {formatPrice(inst.price)} ₽</div>
                </div>
                <span className={`w-2 h-2 rounded-full shrink-0 ${inst.published ? "bg-emerald-400" : "bg-gray-500"}`} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
