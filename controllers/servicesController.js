import {containerLink as data} from '../data/db.js'

export const servicesController = (req, res) => {
    res.json(data)
}