let express = require('express')
let app = express()

let todorout = require('./routers/todo_rout')


app.use(express.json())


app.use('/api/v1/tasks', todorout)

module.exports = app;