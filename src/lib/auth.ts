/* ── Role-based authentication ──────────────────────────────
 * Two roles:
 *   admin      — полный доступ ко всему (контент, установки, цены, топливо)
 *   moderator  — ограниченный доступ: установки + цены + топливо
 *
 * Пароли и токен-ключ читаются из ENV переменных.
 * Fallback-значения только для dev-окружения.
 * В production обязательно задайте ADMIN_PASSWORD, MODERATOR_PASSWORD, AUTH_SECRET.
 * ───────────────────────────────────────────────────────────*/

import crypto from "crypto";

export type Role = "admin" | "moderator";

export interface Credentials {
  role: Role;
  label: string;
  canEditContent: boolean;
  canEditInstallations: boolean;
  canEditPricing: boolean;
  canEditFuel: boolean;
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "zrauto2024";
const MODERATOR_PASSWORD = process.env.MODERATOR_PASSWORD ?? "moder2024";
const AUTH_SECRET = process.env.AUTH_SECRET ?? "dev_secret_change_in_production";

/** Generate HMAC-based token for a role */
function generateToken(role: Role): string {
  const hmac = crypto.createHmac("sha256", AUTH_SECRET);
  hmac.update(role);
  return `${role}:${hmac.digest("hex")}`;
}

export const ADMIN_TOKEN = generateToken("admin");
export const MODERATOR_TOKEN = generateToken("moderator");

/** Проверка пароля на сервере */
export function verifyPassword(password: string): Credentials | null {
  if (typeof password !== "string" || password.length < 1 || password.length > 200) {
    return null;
  }
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
  if (!token || typeof token !== "string") return null;

  // Constant-time comparison to prevent timing attacks
  if (token.length === ADMIN_TOKEN.length && crypto.timingSafeEqual(Buffer.from(token), Buffer.from(ADMIN_TOKEN))) {
    return {
      role: "admin",
      label: "Администратор",
      canEditContent: true,
      canEditInstallations: true,
      canEditPricing: true,
      canEditFuel: true,
    };
  }
  if (token.length === MODERATOR_TOKEN.length && crypto.timingSafeEqual(Buffer.from(token), Buffer.from(MODERATOR_TOKEN))) {
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
