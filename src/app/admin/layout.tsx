"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token === "zrauto_admin_2024") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production use proper auth
    if (password === "zrauto2024") {
      localStorage.setItem("admin_token", "zrauto_admin_2024");
      setAuthenticated(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center pt-20">
        <div className="w-full max-w-md mx-4">
          <div className="bg-surface-light rounded-2xl p-8 border border-white/5">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                ZR
              </div>
              <h1 className="text-2xl font-bold text-white">Панель управления</h1>
              <p className="text-gray-400 text-sm mt-1">Введите пароль для входа</p>
            </div>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="w-full bg-surface rounded-xl px-4 py-3 text-white border border-white/10 focus:border-primary focus:outline-none mb-4"
              />
              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: "/admin", label: "Главная", icon: "home" },
    { href: "/admin/installations", label: "Установки", icon: "list" },
    { href: "/admin/installations/new", label: "Добавить", icon: "plus" },
  ];

  return (
    <div className="min-h-screen bg-surface pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-surface-light rounded-2xl p-4 border border-white/5 sticky top-24">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black">
                  ZR
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Админ-панель</div>
                  <div className="text-gray-500 text-xs">ZR AUTO</div>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.icon === "home" && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    )}
                    {item.icon === "list" && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    )}
                    {item.icon === "plus" && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    )}
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    localStorage.removeItem("admin_token");
                    setAuthenticated(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-400/5 transition-all w-full"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
                  Выйти
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
