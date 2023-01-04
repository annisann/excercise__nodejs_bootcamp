// Basic routing

const http = require('http')

const port = process.env.port || 4141

// http server handle request from browser
const server = http.createServer(
    function(request, response) {
        response.end("Hello!")
    }
)

server.listen(port)
console.log(`Server listening on post ${port}`)