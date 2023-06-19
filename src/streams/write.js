import fs from 'fs';

const write = async () => {
    const filePath = 'files/fileToWrite.txt';
    const writableStream = fs.createWriteStream(filePath);

    process.stdin.on('data', data => {
        writableStream.write(data);
    })

    process.stdin.on('end', () => {
        writableStream.end();
    })

    writableStream.on('error', err => console.error(err));
};

await write();
