const express = require('express')
const config = require('config')
const mongoose = require('mongoose')//dbuser:ivan dbuserpass:shitsoft

const app = express()
const PORT = config.get('port') || 3002

app.use(express.json({extended: true}))//позволяет принимать json
app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}
start()

app.get('/', (req, res) => {
    res.send('Hello from Express JS \"/\"')
})
