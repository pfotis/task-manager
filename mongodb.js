// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ _id: new ObjectId('612243228317831fda6df2be') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 36 }).toArray((error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 36 }).count((error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    db.collection('tasks').findOne({_id: new ObjectId("612245c3a11a496ce0c32f28") }, (error, task) => {
        if(error)
            return console.log('Unable to fetch')
        console.log(task)
    })

    db.collection('tasks').find({ completed: true }).toArray((error, task) => {
        if (error)
            return console.log('Unable to fetch')
        console.table(task)
    })
})
