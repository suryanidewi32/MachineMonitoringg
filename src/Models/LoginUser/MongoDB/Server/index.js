const mongoose = require('mongoose')

/********************************************************* */
const uri = 'mongodb://localhost:27017'
const Server = function(){
    mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
      )
.then(() => console.log('MongoDB database connection established successfully'))
.catch(err => console.log(err))

}
module.exports = Server