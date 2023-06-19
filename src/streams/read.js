import fs from 'fs';

const read = async () => {
    const filePath = 'files/fileToRead.txt';
    const readableStream = fs.createReadStream(filePath);

    readableStream.on('data', data => {
        process.stdout.write(data);
    });

    readableStream.on('error', err => console.error(err));
};

await read();
