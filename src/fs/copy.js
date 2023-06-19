import { promises as fs } from 'fs';
import path from 'path';

const START_DIR = 'files';
const FINAL_DIR = 'files_copy';

const copy = async () => {
    try {
        await fs.mkdir(FINAL_DIR);
        await copyFolder(START_DIR, FINAL_DIR);
    } catch {
        console.error('FS operation failed')
    }
};

const copyFolder = async (currentPath, finalPath) => {
    const files = await fs.readdir(currentPath);

    for (const file of files) {
        const currentFilePath = path.join(currentPath, file);
        const finalFilePath = path.join(finalPath, file);

        const fileStat = await fs.stat(currentFilePath);

        if (fileStat.isDirectory()) {
            await fs.mkdir(finalFilePath);
            await copyFolder(currentFilePath, finalFilePath);
        } else {
            await fs.copyFile(currentFilePath, finalFilePath);
        }
    }
};

await copy();
