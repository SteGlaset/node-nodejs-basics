import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
