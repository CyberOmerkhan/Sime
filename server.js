import http, { get } from 'node:http'
import { getDataFromDB } from './data/db.js'

const destinations = await getDataFromDB()
const PORT = 8000

const server = http.createServer(async (req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  } else if (req.url.startsWith('/api/continent')) {
    res.statusCode = 200;
    const filteredContinent = destinations.filter(item => item.continent.toLowerCase() === req.url.split('/').pop().toLowerCase())
    res.end(JSON.stringify(filteredContinent))
    } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify({
      error: "not found",
      message: "The requested route does not exist"
    })
    )
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
