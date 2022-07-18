import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'

import cors from 'cors' //Connect/Express middleware that can be used to enable CORS with various options.

export const app = express()

app.disable('x-powered-by')

app.use(cors()) //cross origin resource sharing 
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev')) //logs time to respond to request?
//middleware ( .use() calls ) can respond to requests themselves, although they're not meant to be used as such.


const log = (req, res, next) => {
  console.log("logging")
  next() //next in the call stack
}




app.get('/', (req, res) => {
  res.send({ data: 'Hello World' })
})

app.post('/', (req, res) => {
  console.log(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
}
