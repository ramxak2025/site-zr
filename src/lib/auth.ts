/* ── Simple role-based authentication ──────────────────────
 * Two roles:
 *   admin      — полный доступ ко всему (контент, установки, цены, топливо)
 *   moderator  — ограниченный доступ: установки + цены + топливо
 *
 * В production рекомендуется перейти на OAuth/JWT с HttpOnly cookies.
 * Пароли читаются из ENV, fallback — дефолтные значения для разработки.
 * ───────────────────────────────────────────────────────────*/

export type Role = "admin" | "moderator";

export interface Credentials {
  role: Role;
  label: string;
  // permissions
  canEditContent: boolean;
  canEditInstallations: boolean;
  canEditPricing: boolean;
  canEditFuel: boolean;
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "zrauto2024";
const MODERATOR_PASSWORD = process.env.MODERATOR_PASSWORD ?? "moder2024";

export const ADMIN_TOKEN = "zrauto_admin_2024";
export const MODERATOR_TOKEN = "zrauto_moder_2024";

/** Проверка пароля на сервере */
export function verifyPassword(password: string): Credentials | null {
  if (password === ADMIN_PASSWORD) {
    return {
      role: "admin",
      label: "Администратор",
      canEditContent: true,
      canEditInstallations: true,
      canEditPricing: true,
      canEditFuel: true,
    };
  }
  if (password === MODERATOR_PASSWORD) {
    return {
      role: "moderator",
      label: "Модератор",
      canEditContent: false,
      canEditInstallations: true,
      canEditPricing: true,
      canEditFuel: true,
    };
  }
  return null;
}

/** Проверка токена авторизации (из заголовка) */
export function verifyToken(token: string | null): Credentials | null {
  if (!token) return null;
  if (token === ADMIN_TOKEN) {
    return {
      role: "admin",
      label: "Администратор",
      canEditContent: true,
      canEditInstallations: true,
      canEditPricing: true,
      canEditFuel: true,
    };
  }
  if (token === MODERATOR_TOKEN) {
    return {
      role: "moderator",
      label: "Модератор",
      canEditContent: false,
      canEditInstallations: true,
      canEditPricing: true,
      canEditFuel: true,
    };
  }
  return null;
}

/** Маркерные разделы контента, требующие роль admin */
export const ADMIN_ONLY_SECTIONS = [
  "hero",
  "services",
  "reviews",
  "reviewPlatforms",
  "contacts",
  "about",
  "background",
] as const;

/** Разделы, доступные модератору */
export const MODERATOR_SECTIONS = ["pricing", "fuelPrices"] as const;
