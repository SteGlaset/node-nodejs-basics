const parseArgs = () => {
    const envArgs = process.argv.slice(2);
    const parsedArgs = envArgs.reduce((acc, arg, i) =>  acc += i % 2 ? ` is ${arg} ` : arg)

    console.log(parsedArgs)
};

parseArgs();
