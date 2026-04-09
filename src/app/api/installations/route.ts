import { NextResponse } from "next/server";
import { getInstallations, saveInstallation } from "@/lib/storage";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const installations = await getInstallations();
  return NextResponse.json(installations);
}

/** Validate installation input — reject malformed data */
function validateInstallation(data: Record<string, unknown>): string | null {
  if (!data || typeof data !== "object") return "Некорректные данные";
  if (typeof data.carBrand !== "string" || data.carBrand.length < 1 || data.carBrand.length > 100) return "Некорректная марка авто";
  if (typeof data.carModel !== "string" || data.carModel.length < 1 || data.carModel.length > 100) return "Некорректная модель авто";
  if (typeof data.gboSystem !== "string" || data.gboSystem.length < 1) return "Некорректная система ГБО";
  if (data.price !== undefined && (typeof data.price !== "number" || data.price < 0 || data.price > 10_000_000)) return "Некорректная цена";
  if (data.description !== undefined && typeof data.description !== "string") return "Некорректное описание";
  if (data.images !== undefined && !Array.isArray(data.images)) return "Некорректные изображения";
  if (Array.isArray(data.images) && data.images.length > 50) return "Слишком много изображений";
  return null;
}

export async function POST(request: Request) {
  const token = request.headers.get("x-auth-token");
  const creds = verifyToken(token);
  if (!creds || !creds.canEditInstallations) {
    return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
  }

  let installation;
  try {
    installation = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  const validationError = validateInstallation(installation);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  await saveInstallation(installation);
  return NextResponse.json({ success: true }, { status: 201 });
}
