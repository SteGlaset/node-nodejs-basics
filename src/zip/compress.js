import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const readableStream = fs.createReadStream('files/fileToCompress.txt');
    const writeableStream = fs.createWriteStream('files/archive.gz');
    const gzip = zlib.createGzip();

    readableStream.pipe(gzip).pipe(writeableStream);
};

await compress();
