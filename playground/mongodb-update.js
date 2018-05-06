// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5aef7a717deaa7da7df8d197')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((res) => {
//   console.log(res);
// });

db.collection('Users').findOneAndUpdate({name: 'Carlos'}, {
  $set: { name: 'Dude' },
  $inc: { age: +50 }
}, {
  returnOriginal: false
}).then((res) => {
  console.log(res);
});

  // client.close();
});
