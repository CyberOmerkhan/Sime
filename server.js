import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'
import { getData } from './utils/getData.js'

const PORT = 8080
const __dirname = import.meta.dirname
const ghostlyData = await getData(__dirname)
console.log(JSON.parse(ghostlyData))

const server = http.createServer(async (req, res) => {
    serveStatic(res, req, __dirname)
})

server.listen(PORT, () => {
    console.log(`Server is running on a port ${PORT}`)
})