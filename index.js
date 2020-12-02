const morgan = require('morgan')
const express = require('express')
const app = express()
// Selected port
const port = process.env.PORT || 3000
// Routers
const employee = require('./routes/employee')
const user = require('./routes/user')
// Middleware
const auth = require('./middleware/auth')
const not_found = require('./middleware/notFound')
const index = require('./middleware/index')
const middleware = require('./middleware/index')
const cors = require('./middleware/cors')

app.use(cors)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', index)
app.use('/user', user)
app.use(auth)
app.use('/employee', employee)
app.use(not_found)

app.listen(port, () => {
    console.log('Server is running in port ' + port + '\nGo to http://localhost:' + port)
})