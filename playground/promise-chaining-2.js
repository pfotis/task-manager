require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findOneAndDelete('61260b7c91589e071591b4d1').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})