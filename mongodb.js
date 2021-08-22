// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongodb.MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Peter',
    //     age: 36
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sophie',
    //         age: 33
    //     }, {
    //         name: 'Myrofora',
    //         age: 1
    //     } 
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents')
    //         }
    //         console.log(result)
    //     }
    // )
    const tasks = [{
        description: 'git status',
        completed: true
    }, {
        description: 'git add .',
        completed: true
    }, {
        description: 'git commit -m "message..."',
        completed: false
    }]

    db.collection('tasks').insertMany(tasks, (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }
        console.log(result)
    })
})
