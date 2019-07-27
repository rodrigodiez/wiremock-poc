const request = require('request-promise');

const optionsDelete = {
    method: 'DELETE',
    uri: 'http://localhost:8080/__admin/mappings',
    json: true
};

const optionsCreate = {
    method: 'POST',
    uri: 'http://localhost:8080/__admin/mappings',
    body: {
        request: {
            method: "GET",
            urlPattern: ".*"
        },
        response: {
            proxyBaseUrl: "http://project-b:3000"
        }
    },
    json: true
};

(async ()  => {
    const responseDelete = await request(optionsDelete)
    console.log(responseDelete)
    
    const responseCrete = await request(optionsCreate)
    console.log(optionsCreate)
})();


