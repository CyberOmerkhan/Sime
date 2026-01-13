import express, { application } from 'express'
import {startups} from './data/data.js'

const app = express()

app.get('/api', (req, res) => {
    const queryObj = req.query
    let filteredData = startups.filter((item) => {
        return ((!queryObj.industry || item.industry.toLowerCase() === queryObj.industry.toLowerCase()) && 
            (!queryObj.country || item.country.toLowerCase() === queryObj.country.toLowerCase()) && 
            (!queryObj.continent || item.continent.toLowerCase() === queryObj.continent.toLowerCase()) && 
            (!queryObj.is_seeking_funding || item.is_seeking_funding.toString() === queryObj.is_seeking_funding.toLowerCase()) && 
            (!queryObj.has_mvp || item.has_mvp.toString() === queryObj.has_mvp.toLowerCase()))
    })
    res.json(filteredData)
})

app.get('/api/:field/:term', (req, res) => {
    const { field, term } = req.params
    const data = startups.filter(item => {
        return (
        (!(field.toLowerCase() === 'country') || item.country.toLowerCase() === term.toLowerCase()) && 
        (!(field.toLowerCase() === 'continent') || item.continent.toLowerCase() === term.toLowerCase()) && 
        (!(field.toLowerCase() === 'industry') || item.industry.toLowerCase() === term.toLowerCase()))
    })
    console.log(req.params)
    res.json(data)
})

app.listen(8000, () => console.log('listening 8000'))

