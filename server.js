import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'

const PORT = 8080
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    serveStatic(__dirname)
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running on a port ${PORT}`)
})