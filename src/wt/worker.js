import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = async () => {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
};

await sendResult();
