import express from 'express'
import {startups} from './data/data.js'

const app = express()

app.get('/api', (req, res) => {
    res.json(startups)
})

app.listen(8000, () => console.log('listening 8000'))

