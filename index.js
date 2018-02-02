const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const mossyController = require('./controllers/mossy-controller')
// const mossyRouter = require('./routes/mossy-routes.js')


app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

// app.use(mossyRouter)


// USERS Routes
// app.get('users', (req, res, next) => {
//
// })
//
// app.get('users/:id', (req, res, next) => {
//
// })
//
// app.post('users/', (req, res, next) => {
//
// })
//
// app.delete('users:/id', (req, res, next) => {
//
// })

// REPORTS Routes
// app.get('/reports', (req, res, next) => {
//
// })
//
// app.get('/reports/:id', (req, res, next) => {
//
// })
//
// app.post('/reports', (req, res, next) => {
//
// })
//
// app.delete('/reports/:id', (req, res, next) => {
//
// })

// TOYS Routes
// app.get('/toys', (req, res, next) => {
//
// })
//
// app.get('/toys/:id', (req, res, next) => {
//
// })


app.use((err, req, res, next) => {
  console.log('ERROR!!!', err)
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: `Not found`}})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


// module.exports = app
