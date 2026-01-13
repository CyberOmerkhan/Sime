
import {startups} from '../data/data.js'

export const productsController = (req, res) => {
    res.json(startups)
}