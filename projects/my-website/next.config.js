module.exports = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    
    //NextJS builds up cache too much. Clean it up.
    // webpack: (config, options) => {
    //     config.output.clean = true;
    //     return config;
    // }
}
