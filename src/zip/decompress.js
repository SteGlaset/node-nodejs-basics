import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    const readableStream = fs.createReadStream('files/archive.gz');
    const writeableStream = fs.createWriteStream('files/fileToCompress.txt');
    const gunzip = zlib.createGunzip();

    readableStream.pipe(gunzip).pipe(writeableStream);
};

await decompress();
