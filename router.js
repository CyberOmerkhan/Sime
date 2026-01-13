import express from 'express'
import {startups} from './data/data.js'
import {containerLink as data} from './data/db.js'

const PORT = 8080;
const app = express();
const apiRouter = express.Router()

const handleApiStartups = (req, res) => {
    res.json(startups)
}
const handleApiData = (req, res) => {
    res.json(data)
}

apiRouter.get('/data', handleApiData)
apiRouter.get('/startups', handleApiStartups)

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))