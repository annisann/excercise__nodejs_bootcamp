// Basic routing with json response

const http = require('http')

const port = process.env.port || 4141

// http server handle request from browser
const server = http.createServer(
    function(request, response) {
        response.setHeader("Content-Type", "application/json")
        response.end(
            JSON.stringify(
                {
                    batch: "Batch#1",
                    bootcamp: ["JS", "NodeJS"]
                }
            )
        )
    }
)

server.listen(port)
console.log(`Server listening on post ${port}`)