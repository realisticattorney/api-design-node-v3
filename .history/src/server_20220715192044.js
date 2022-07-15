import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'

import cors from 'cors' // Connect/Express middleware that can be used to enable CORS with various options.

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

export const start = () => {}
