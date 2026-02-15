import { promises as fs } from "fs";
import path from "path";
import { Installation, SAMPLE_INSTALLATIONS } from "./data";

const DATA_DIR = path.join(process.cwd(), "data");
const INSTALLATIONS_FILE = path.join(DATA_DIR, "installations.json");

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function ensureInstallationsFile() {
  await ensureDataDir();
  try {
    await fs.access(INSTALLATIONS_FILE);
  } catch {
    await fs.writeFile(INSTALLATIONS_FILE, JSON.stringify(SAMPLE_INSTALLATIONS, null, 2));
  }
}

export async function getInstallations(): Promise<Installation[]> {
  await ensureInstallationsFile();
  const raw = await fs.readFile(INSTALLATIONS_FILE, "utf-8");
  return JSON.parse(raw);
}

export async function getPublishedInstallations(): Promise<Installation[]> {
  const all = await getInstallations();
  return all.filter((i) => i.published);
}

export async function getInstallationBySlug(slug: string): Promise<Installation | undefined> {
  const all = await getPublishedInstallations();
  return all.find((i) => i.slug === slug);
}

export async function getInstallationById(id: string): Promise<Installation | undefined> {
  const all = await getInstallations();
  return all.find((i) => i.id === id);
}

export async function saveInstallation(installation: Installation): Promise<void> {
  const all = await getInstallations();
  const idx = all.findIndex((i) => i.id === installation.id);
  if (idx >= 0) {
    all[idx] = installation;
  } else {
    all.push(installation);
  }
  await fs.writeFile(INSTALLATIONS_FILE, JSON.stringify(all, null, 2));
}

export async function deleteInstallation(id: string): Promise<void> {
  const all = await getInstallations();
  const filtered = all.filter((i) => i.id !== id);
  await fs.writeFile(INSTALLATIONS_FILE, JSON.stringify(filtered, null, 2));
}
