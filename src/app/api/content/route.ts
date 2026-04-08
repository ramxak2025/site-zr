import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, updateSiteContent } from "@/lib/content-storage";
import { verifyToken } from "@/lib/auth";
import type { SiteContent } from "@/lib/content";

const VALID_SECTIONS: (keyof SiteContent)[] = [
  "hero", "services", "reviews", "reviewPlatforms",
  "contacts", "about", "background", "pricing", "fuelPrices",
];

const MODERATOR_SECTIONS: (keyof SiteContent)[] = ["pricing", "fuelPrices"];

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: NextRequest) {
  // ── Проверка авторизации ────────────────────────────
  const token = request.headers.get("x-auth-token");
  const creds = verifyToken(token);
  if (!creds) {
    return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  const { section, data } = body as { section: keyof SiteContent; data: unknown };

  if (!section || data === undefined || data === null) {
    return NextResponse.json({ error: "Требуются поля section и data" }, { status: 400 });
  }

  if (!VALID_SECTIONS.includes(section)) {
    return NextResponse.json({ error: "Недопустимая секция" }, { status: 400 });
  }

  // ── Проверка прав для секций ──────────────────────
  if (creds.role === "moderator" && !MODERATOR_SECTIONS.includes(section)) {
    return NextResponse.json(
      { error: "У модератора нет прав на редактирование этой секции" },
      { status: 403 }
    );
  }

  const updated = await updateSiteContent(section, data);
  return NextResponse.json({ ok: true, content: updated });
}
