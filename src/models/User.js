import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        user: {type:Number, required: true, unique: true},
        password: {type:String, required: true}
    }
)

const Users = mongoose.model('users', UserSchema)

export default Users