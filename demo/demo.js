/**
 * Created by lap00344 on 1/23/17.
 */

const http = require('http')
const server = http.createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
response.end('<h1>Hello from Node.js</h1>')
})
server.listen(8000)