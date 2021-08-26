require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('612607d7b72f0605f806e271', { age: 36 }).then((user => {
    console.log(user)
    return User.countDocuments({ age: 36 })
})).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})