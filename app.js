const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api', (req, res) => {
    res.json({
        message: "Hello from backend!"
    })
})

app.listen(PORT, () =>
    console.log(`Server has been started on port ${PORT}`)
)