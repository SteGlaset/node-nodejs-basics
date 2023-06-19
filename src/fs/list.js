import { promises as fs } from "fs";

const FILE_DIR = 'files/';

const list = async () => {
    await fs.readdir(FILE_DIR)
        .then(files => console.log(...files))
        .catch(() => console.error('FS operation failed'));
};

await list();
