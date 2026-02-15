import { NextResponse } from "next/server";
import { getInstallations, saveInstallation } from "@/lib/storage";

export async function GET() {
  const installations = await getInstallations();
  return NextResponse.json(installations);
}

export async function POST(request: Request) {
  const installation = await request.json();
  await saveInstallation(installation);
  return NextResponse.json({ success: true }, { status: 201 });
}
