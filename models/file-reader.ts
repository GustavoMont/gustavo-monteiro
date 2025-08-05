import { readdir, readFile as fsReadFile } from "node:fs/promises";
import { existsSync } from "node:fs";

function checkDir(path: string) {
  return existsSync(path);
}

async function listDirFiles(path: string): Promise<string[]> {
  const dirExists = checkDir(path);
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

const fileReader = { listDirFiles, readFile, checkDir };

export default fileReader;
