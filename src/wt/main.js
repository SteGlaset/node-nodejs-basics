import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const cpuCores = os.cpus().length;
    const results = [];

    const handleWorkerMessage = (index, result) => {
        results[index] = { status: 'resolved', data: result };
        checkAllWorkersFinished();
    };

    const handleWorkerError = index => {
        results[index] = { status: 'error', data: null };
        checkAllWorkersFinished();
    };

    const checkAllWorkersFinished = () => {
        if (results.length === cpuCores && results.every((result) => result !== undefined)) {
            console.log(results);
        }
    };

    for (let i = 0; i < cpuCores; i++) {
        const worker = new Worker('./worker.js', { workerData: i + 10 });

        worker.on('message', (result) => {
            handleWorkerMessage(i, result);
        });

        worker.on('error', (error) => {
            handleWorkerError(i, error);
        });
    }
};

await performCalculations();
