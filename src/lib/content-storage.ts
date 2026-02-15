import { promises as fs } from "fs";
import path from "path";
import { SiteContent, DEFAULT_CONTENT } from "./content";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function ensureContentFile() {
  await ensureDataDir();
  try {
    await fs.access(CONTENT_FILE);
  } catch {
    await fs.writeFile(CONTENT_FILE, JSON.stringify(DEFAULT_CONTENT, null, 2));
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  await ensureContentFile();
  const raw = await fs.readFile(CONTENT_FILE, "utf-8");
  const stored = JSON.parse(raw) as Partial<SiteContent>;
  // Merge with defaults so new fields are always present
  return { ...DEFAULT_CONTENT, ...stored };
}

export async function updateSiteContent(
  section: keyof SiteContent,
  data: unknown
): Promise<SiteContent> {
  const current = await getSiteContent();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (current as any)[section] = data;
  await fs.writeFile(CONTENT_FILE, JSON.stringify(current, null, 2));
  return current;
}

export async function updateFullContent(data: SiteContent): Promise<SiteContent> {
  await ensureDataDir();
  await fs.writeFile(CONTENT_FILE, JSON.stringify(data, null, 2));
  return data;
}
