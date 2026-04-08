/** Клиентский helper для авторизованных запросов из админки */
const STORAGE_KEY = "zrauto_admin_session";

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { token?: string };
    return parsed.token ?? null;
  } catch {
    return null;
  }
}

export async function adminFetch(input: RequestInfo, init: RequestInit = {}) {
  const token = getAdminToken();
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type") && init.body) {
    headers.set("Content-Type", "application/json");
  }
  if (token) headers.set("x-auth-token", token);
  return fetch(input, { ...init, headers });
}
