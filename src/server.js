const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.DEV_PORT

app.listen(port, () => {
    console.log(`[SERVER]: Server running at http://localhost:${port}`)
})
