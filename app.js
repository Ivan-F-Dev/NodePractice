const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')//dbuser:ivan dbuserpass:shitsoft

const app = express()

app.use(express.json({extended: true}))//позволяет принимать json
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 3002

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
