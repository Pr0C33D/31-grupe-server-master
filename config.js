const environments = {};

environments.dev = {
    httpPort: 3000,
    envName: 'dev',
    hashingSecret: 'dummy-secret'
};

environments.production = {
    httpPort: 5000,
    envName: 'production',
    hashingSecret: 'dummy-secret-secret-secret-secret-secret-dummy'
};

const currentENV = typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV.toLowerCase() : '';
const exportableEnvName = typeof environments[currentENV] === 'object' ? currentENV : 'dev';


module.exports = environments[exportableEnvName];