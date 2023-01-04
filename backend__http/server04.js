const http = require('http')
const fs = require('fs')

const port = process.env.port || 4141

// http server handle request from browser
const server = http.createServer(
    function(request, response) {
        if (request.url === "/") return responseText(request, response)
        if (request.url === "/json") return responseJSON(request, response)
        if (request.url.match(/^\/static/)) return responseStatic(request, response)

        responseNotFound(request, response)
    }
)

function responseText(request, response) {
    response.setHeader("Content-Type", "text/plain")
    response.end("What color is banana?\n Yello!")
}

function responseJSON(request, response) {
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

function responseNotFound(request, response) {
    response.writeHead(404,
        {
            "Content-Type": "text/plain"
        })
    response.end("NOT FOUND")
}

// shows image on browser
function responseStatic(request, response) {
    const fileName = `${__dirname}/public${request.url.split('/static')[1]}`
    
    fs.createReadStream(fileName)
        .on("error", () => responseNotFound)
        .pipe(response)
}

server.listen(port)
console.log(`Server listening on post ${port}`)