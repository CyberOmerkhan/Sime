import express from 'express'
import {containerLink as data} from './data/db.js'
import {apiRouter} from './routes/apiRoutes.js'
import cors from 'cors'

const PORT = 8080;
const app = express();

app.use(express.static('public', {index: 'upload-sighting.html'}))

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))