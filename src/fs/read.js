import { promises as fs } from 'fs';
import path from "path";

const FILE_DIR = 'files/';

const read = async () => {
    try {
        const filePath = path.join(FILE_DIR, 'fileToRemove.txt');

        await fs.unlink(filePath)
    } catch {
        console.log('FS operation failed')
    }
};

await read();
