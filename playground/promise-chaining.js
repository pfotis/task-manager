require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('61260447864deb053276d178', { age: 36 }).then((user => {
    console.log(user)
    return User.countDocuments({ age: 36 })
})).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})