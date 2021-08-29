require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('612607d7b72f0605f806e271', { age: 36 }).then((user => {
//     console.log(user)
//     return User.countDocuments({ age: 36 })
// })).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('612607d7b72f0605f806e271', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})