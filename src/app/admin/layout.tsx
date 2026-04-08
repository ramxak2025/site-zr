"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, createContext, useContext } from "react";

/* ── Auth Context для использования внутри админки ──────── */
export interface AuthState {
  token: string;
  role: "admin" | "moderator";
  label: string;
  permissions: {
    canEditContent: boolean;
    canEditInstallations: boolean;
    canEditPricing: boolean;
    canEditFuel: boolean;
  };
}

export const AdminAuthContext = createContext<AuthState | null>(null);
export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

const STORAGE_KEY = "zrauto_admin_session";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthState;
        if (parsed?.token && parsed?.role) setAuth(parsed);
      }
    } catch {}
    setChecked(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка входа");
        setLoading(false);
        return;
      }
      const session: AuthState = {
        token: data.token,
        role: data.role,
        label: data.label,
        permissions: data.permissions,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      setAuth(session);
      setPassword("");
    } catch {
      setError("Не удалось подключиться к серверу");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuth(null);
  };

  if (!checked) return null;

  if (!auth) {
    return (
      <div className="min-h-screen bg-surface-dark flex items-center justify-center pt-20">
        <div className="w-full max-w-md mx-4">
          <div className="admin-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                ZR
              </div>
              <h1 className="text-2xl font-bold text-white">Панель управления</h1>
              <p className="text-gray-400 text-sm mt-1">Вход для администратора и модератора</p>
            </div>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="admin-input mb-4"
                autoFocus
                disabled={loading}
              />
              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                disabled={loading || !password}
                className="w-full bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {loading ? "Проверяем..." : "Войти"}
              </button>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-500">
                <div className="font-semibold text-gray-400 mb-1">Доступы по умолчанию</div>
                <div>Админ — полный контроль над сайтом</div>
                <div>Модератор — работы, цены, топливо</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /* ── Навигация по ролям ────────────────────────────── */
  const allNavItems = [
    { href: "/admin", label: "Главная", icon: "home", allowed: true },
    { href: "/admin/content", label: "Контент сайта", icon: "edit", allowed: auth.permissions.canEditContent },
    { href: "/admin/pricing", label: "Цены установки", icon: "tag", allowed: auth.permissions.canEditPricing },
    { href: "/admin/fuel", label: "Цены топлива", icon: "drop", allowed: auth.permissions.canEditFuel },
    { href: "/admin/installations", label: "Наши работы", icon: "list", allowed: auth.permissions.canEditInstallations },
    { href: "/admin/installations/new", label: "Добавить работу", icon: "plus", allowed: auth.permissions.canEditInstallations },
  ];
  const navItems = allNavItems.filter((i) => i.allowed);

  const icons: Record<string, React.ReactElement> = {
    home: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
    edit: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
    list: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
    plus: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 4.5v15m7.5-7.5h-15" /></svg>,
    tag: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path d="M6 6h.008v.008H6V6z" /></svg>,
    drop: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v2.25m0 13.5V21M5.636 5.636l1.591 1.591m9.546 9.546l1.591 1.591M3 12h2.25m13.5 0H21m-2.636-6.364l-1.591 1.591m-9.546 9.546l-1.591 1.591" /></svg>,
  };

  return (
    <AdminAuthContext.Provider value={auth}>
      <div className="min-h-screen bg-surface-dark pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="admin-card rounded-2xl p-4 lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-6 px-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black">
                    ZR
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{auth.label}</div>
                    <div className="text-gray-500 text-xs">ZR AUTO</div>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {icons[item.icon]}
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={logout}
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
    </AdminAuthContext.Provider>
  );
}
