import express from 'express'

const PORT = 8000;
const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

const app = express()

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(celebrity))
})

app.listen(PORT, () => {
    console.log(`Server connected to a port ${PORT}`)
})


