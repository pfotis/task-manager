require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findOneAndDelete('61260b7c91589e071591b4d1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id, { completed }) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('1260b7c91589e071591b', false).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})