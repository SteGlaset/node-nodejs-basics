import { promises as fs } from 'fs';
import path from "path";

const FILE_DIR = 'files/'

const rename = async () => {
    try {
        const currentFilePath = path.join(FILE_DIR, 'wrongFilename.txt');
        const newFilePath = path.join(FILE_DIR, 'properFilename.md');

        await fs.access(currentFilePath);
        await fs.open(newFilePath, 'wx');

        await fs.rename(currentFilePath, newFilePath);
    } catch {
        console.error('FS operation failed');
    }
};

await rename();
