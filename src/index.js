const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const routerUser = require('./routes/user')
const routerTask = require('./routes/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(routerUser)
app.use(routerTask)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})