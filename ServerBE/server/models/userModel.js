const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    pass:{type: String, required:true},
    quote:{type: String},


},
{collection: 'users'}
) 

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
   }

const User = mongoose.model('UserData',userSchema)

module.exports = User 