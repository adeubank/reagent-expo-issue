const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// Expo expects a function so we can pass around options.
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);


    // use just victory in the web
    config.resolve.alias['victory-native$'] = 'victory';

    console.log("env", env)
    console.dir(config, { depth: 100})

    return config;
};