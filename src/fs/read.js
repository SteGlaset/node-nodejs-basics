import { promises as fs } from 'fs';
import path from "path";

const FILE_DIR = 'files/';

const read = async () => {
    try {
        const filePath = path.join(FILE_DIR, 'fileToRead.txt');
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        
        console.log(data);
    } catch {
        console.log('FS operation failed')
    }
};

await read();
