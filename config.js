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

module.exports = environments;