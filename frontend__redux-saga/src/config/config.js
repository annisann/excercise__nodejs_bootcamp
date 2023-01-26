const config = {
    baseUrl: 'http://localhost:4141',
    endpoint: {
        auth: '/auth',
        calculator: '/calculator',
        signin: '/user',
    }
};

config.endpoint.region = {
    all: config.baseUrl + '/regions',
    update: config.baseUrl + '/regions/update',
    create: config.baseUrl + '/regions/add',
    delete: config.baseUrl + '/regions/'
}

export default config