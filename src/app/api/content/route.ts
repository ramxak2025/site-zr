import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, updateSiteContent } from "@/lib/content-storage";
import type { SiteContent } from "@/lib/content";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { section, data } = body as { section: keyof SiteContent; data: unknown };

  if (!section || !data) {
    return NextResponse.json({ error: "section and data required" }, { status: 400 });
  }

  const valid: (keyof SiteContent)[] = [
    "hero", "services", "reviews", "reviewPlatforms", "contacts", "about",
  ];

  if (!valid.includes(section)) {
    return NextResponse.json({ error: "invalid section" }, { status: 400 });
  }

  const updated = await updateSiteContent(section, data);
  return NextResponse.json({ ok: true, content: updated });
}
