import { promises as fs } from "fs";
import { createHash } from 'crypto';

const calculateHash = async () => {
    const filePath = 'files/fileToCalculateHashFor.txt';

    const fileData = await fs.readFile(filePath);

    const hash = createHash('sha256').update(fileData).digest('hex');

    console.log(hash);
};

await calculateHash();
