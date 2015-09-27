var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connect('mongodb://localhost:27017/phone');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var schema = new mongoose.Schema({
  number: {type:String, required: true, unique: true},
  isDone: {type: Boolean},
  time: {type: Date}
});
mongoose.model('Calls', schema);
