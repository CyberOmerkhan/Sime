import http from 'node:http'
import {serveStatic} from './serveStatic.js'
import { getData } from './getData.js'
import { handleGet, handlePost } from '../handlers/routeHandlers.js'
import {v4 as uuidv4} from 'uuid'

const PORT = 8080
const __dirname = import.meta.dirname
const ghostlyData = await getData(__dirname)
// console.log(JSON.parse(ghostlyData))

const server = http.createServer(async (req, res) => {
    if(req.url === '/api' && req.method === 'GET'){
        return await handleGet(res, __dirname)
    }
    else if(req.url === '/api' && req.method == 'POST'){
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            body = JSON.parse(body)
            const newData = {
                uuid: uuidv4(),
                location: body.location,
                timeStamp: body.timeStamp,
                text: body.text,
                title: body.title,
            }
            return handlePost(__dirname, newData)
        })
    }
    else if(!req.url.startsWith('/api')) {
        return serveStatic(res, req, __dirname)
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on a port ${PORT}`)
})