import { NextResponse } from "next/server";
import { verifyPassword, ADMIN_TOKEN, MODERATOR_TOKEN } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Пароль обязателен" }, { status: 400 });
    }

    const creds = verifyPassword(password);
    if (!creds) {
      return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
    }

    return NextResponse.json({
      token: creds.role === "admin" ? ADMIN_TOKEN : MODERATOR_TOKEN,
      role: creds.role,
      label: creds.label,
      permissions: {
        canEditContent: creds.canEditContent,
        canEditInstallations: creds.canEditInstallations,
        canEditPricing: creds.canEditPricing,
        canEditFuel: creds.canEditFuel,
      },
    });
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }
}
