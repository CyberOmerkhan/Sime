import http, { get } from 'node:http'
import { getDataFromDB } from './data/db.js'
import { handleResponse } from "./utils/handleResponse.js"
import { url } from 'node:inspector'

const destinations = await getDataFromDB()
const PORT = 8000

const server = http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, `http://localhost:${PORT}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(queryObj)


  res.setHeader('Content-Type', 'application/json')
    if (req.url === '/api' && req.method === 'GET') {
        handleResponse(res, 200, destinations)
    } else if (req.url.startsWith('/api/continent')) {
        const filteredContinent = destinations.filter(item => item.continent.toLowerCase() === req.url.split('/').pop().toLowerCase())
        handleResponse(res, 200, filteredContinent)
    } else if(req.url.startsWith('/api/country')){
        console.log(req.url.split('/').pop().toLowerCase())
        const filteredContinent = destinations.filter(item => item.country.toLowerCase() === req.url.split('/').pop().toLowerCase())
        handleResponse(res, 200, filteredContinent)
    }
    else {
        handleResponse(res, 404, {
        error: "not found",
        message: "The requested route does not exist"
        })
        res.statusCode = 404
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
