const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const mossyController = require('./controllers/mossy-controller')
const mossyRouter = require('./routes/routes.js')
app.use(mossyRouter)

app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


// USERS Routes
// app.get('/users', mossyController.getAllUsersCtrl)
// app.get('/users/:id', mossyController.getUserByIdCtrl)
// app.post('/users/', mossyController.createUserCtrl)
// app.delete('/users:/id', mossyController.updateUserCtrl)


// REPORTS Routes
// app.get('/reports', )
// app.get('/reports/:id', )
// app.post('/reports', )
// app.delete('/reports/:id', )


// TOYS Routes
// app.get('/toys', )
// app.get('/toys/:id', )


// FOODS Routes
// app.get('/toys', )
// app.get('/toys/:id', )


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


module.exports = app
