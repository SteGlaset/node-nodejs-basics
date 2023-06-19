import path from "path";
import { promises as fs } from "fs";

const FILE_DIR = 'files/';

const remove = async () => {
    try {
        const filePath = path.join(FILE_DIR, 'fileToRemove.txt');

        await fs.unlink(filePath)
    } catch {
        console.log('FS operation failed')
    }
};

await remove();
