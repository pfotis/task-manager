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
    
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectId("612240adfdd9443cfaafbc93")
    // }, {
    //    $inc: {
    //        age: 1
    //    }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromiseMany = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     name: 'Mike'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 33
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})
