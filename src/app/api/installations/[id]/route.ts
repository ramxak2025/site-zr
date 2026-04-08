import { NextResponse } from "next/server";
import { getInstallationById, saveInstallation, deleteInstallation } from "@/lib/storage";
import { verifyToken } from "@/lib/auth";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const installation = await getInstallationById(id);
  if (!installation) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(installation);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get("x-auth-token");
  const creds = verifyToken(token);
  if (!creds || !creds.canEditInstallations) {
    return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
  }

  const { id } = await params;
  const data = await request.json();
  await saveInstallation({ ...data, id });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get("x-auth-token");
  const creds = verifyToken(token);
  if (!creds || !creds.canEditInstallations) {
    return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
  }

  const { id } = await params;
  await deleteInstallation(id);
  return NextResponse.json({ success: true });
}
