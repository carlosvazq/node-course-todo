// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
//   console.log(res);
// })

// db.collection('Users').deleteMany({name: 'Carlos Vazquez'}).then((res) => {
//   console.log(res);
// });

db.collection('Users').findOneAndDelete({name: 'Mike'}).then((res) => {
  console.log(res);
});

  // client.close();
});
