import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    cartData : {type : Object, default : {}},
}, {minimize : false})

// Here {minimize : false} is used to create cartData without any data

const UserModel = mongoose.models.user || mongoose.model("User", userSchema)

export default UserModel;

