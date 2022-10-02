module.exports = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    swcMinify: true,
    
    //NextJS builds up cache too much. Clean it up.
    // webpack: (config, options) => {
    //     config.output.clean = true;
    //     return config;
    // }
}
