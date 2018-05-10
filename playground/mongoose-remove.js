const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
// Todo.findOneAndRemove({_id: '5af4c827baa1c9ec2a5370c7'}).then()
//
// Todo.findByIdAndRemove('5af4c827baa1c9ec2a5370c7').then((doc) => {
//   console.log(doc);
// });
