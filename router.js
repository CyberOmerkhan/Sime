import express from 'express'
import {containerLink as data} from './data/db.js'
import {apiRouter} from './routes/apiRoutes.js'

const PORT = 8080;
const app = express();

app.use('/api', apiRouter)

app.use((req, res) => {
    res.status(400).json({
        message: "Wrong address. Go back home."
    })
})

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))