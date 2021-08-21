const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://dom:123@assessment.rlyqf.mongodb.net/Assessment?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


const User = mongoose.model("User", userSchema)

module.exports ={
    User,
      
}