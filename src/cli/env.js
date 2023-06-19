const parseEnv = () => {
    const prefix = 'RSS_';
    const envVariables = Object.entries(process.env);

    const rssEnvVariables = envVariables.filter(([key]) => key.startsWith(prefix));

    const formattedEnvVariables = rssEnvVariables.map(([key, value]) => `${key}=${value}`);

    const output = formattedEnvVariables.join('; ');

    console.log(output);
};

parseEnv();
