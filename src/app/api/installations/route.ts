import { NextResponse } from "next/server";
import { getInstallations, saveInstallation } from "@/lib/storage";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const installations = await getInstallations();
  return NextResponse.json(installations);
}

export async function POST(request: Request) {
  const token = request.headers.get("x-auth-token");
  const creds = verifyToken(token);
  if (!creds || !creds.canEditInstallations) {
    return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
  }

  const installation = await request.json();
  await saveInstallation(installation);
  return NextResponse.json({ success: true }, { status: 201 });
}
