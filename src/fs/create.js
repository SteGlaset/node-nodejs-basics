import { promises as fs } from 'fs';
import path from "path";

const FILE_DIR = 'files/'

const noop = () => {};
const create = async () => {
    await fs.open(path.join(FILE_DIR, 'fresh.txt'), 'wx')
        .then((fd) => {
            fs.writeFile(fd, 'I am fresh and young', noop);
        })
        .catch(() => console.error('FS operation failed'));
};

await create();
