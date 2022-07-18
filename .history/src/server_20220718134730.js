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
  console.log('logging')
  console.log(req.method, req.url, res.statusCode) //up to this point, express? sets status code to 200
  //throw 'lol' //while this changes it to 500
  next() //next in the call stack. the arg in next is treated as an error
}

app.use(log) //this means it will run the log function for EVERY CALL

//app.get('/:id/:bla', (req, res) => {
// const { id, bla } = req.params

//is is classic REST
//app.get('/data/*', (req, res) => {  //this and
//app.get('/data?', (req, res) => { //this are rarely used
app.get(
  '/',
  (req, res, next) => {
    console.log('logging')
    next()
  },
  (req, res, next) => {
    console.log('logging')
    next()
  },
  (req, res) => {
    //the log here means it will only call log (middleware) for this route
    res.send({ data: 'Hello World' })
  }
)

app.get('/user', (req, res) => {
  res.send({ data: 1 })
})

app.get('/user', (req, res) => {
  res.send({ data: 2 })
})

app.post('/', [log, log, log], (req, res) => {
  console.log(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
}
