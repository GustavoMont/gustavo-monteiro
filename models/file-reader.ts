import { readdir, readFile as fsReadFile } from "node:fs/promises";
import { existsSync } from "node:fs";

async function listDirFiles(path: string): Promise<string[]> {
  const dirExists = existsSync(path);
  if (!dirExists) {
    return [];
  }
  const allFiles = await readdir(path);

  return allFiles;
}

async function readFile(path: string): Promise<string> {
  const fileContent = await fsReadFile(path, "utf-8");
  return fileContent;
}

const fileReader = { listDirFiles, readFile };

export default fileReader;
