import {
  readdir,
  readFile as fsReadFile,
  writeFile,
  mkdir,
} from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

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

async function handleFolderPath(path: string) {
  const splittedPath = path.split("/");
  const maxPathIndex = splittedPath.length - 1;
  const fileFolder = splittedPath.at(maxPathIndex - 1);
  const folderPath = resolve(fileFolder);
  const dirExists = checkDir(folderPath);
  if (!dirExists) {
    await mkdir(folderPath);
  }
}

async function createFile(path: string, content: string) {
  try {
    await handleFolderPath(path);
    await writeFile(path, content, "utf-8");
  } catch (error) {
    console.log(error);
  }
}

async function readFile(path: string): Promise<string> {
  const fileContent = await fsReadFile(path, "utf-8");
  return fileContent;
}

const fileReader = { listDirFiles, readFile, createFile };

export default fileReader;
