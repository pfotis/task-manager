const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    email: {
        type: String,
        reqiured: true,

    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

const me = new User({
   name: 'Mike',
   email: 'mike@example.com'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

const myTask = new Task({
    description: 'Clean the house',
    completed: true
}).save().then(() => {
    console.log(myTask)
}).catch((error) => {
    console.log('Error!', error)
})