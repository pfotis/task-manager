const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

// const me = new User({
//    name: '   Myrofora    ',
//    email: '   SOPHIE@example.COM.AU      ',
//    password: '    password  '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const task = new Task({
    description: '      clean the house    ',
    completed: 'true'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})