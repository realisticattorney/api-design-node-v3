import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'

import cors from 'cors' Connect/Express middleware that can be used to enable CORS with various options.

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


// [ ] create a route that sends back some json
// [ ] create a route that accepts json and logs it
// [ ] start the server
app.get('/', (req, res) => {
    res.send(JSON.stringify({ data: 'Hello World' }))
}

app.get("/json")



export const start = () => {}
