const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {    
//     res.status(503).send('server under maintenance try again soon !')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')


// const main = async () => {
//     const task = await Task.findById('613dda61ec9b04093a36c13d')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
//         const user = await User.findById('613dd7dc38165108c6eb79ec')
//         await user.populate('tasks').execPopulate()
//         console.log(user.tasks)

// }

// main()