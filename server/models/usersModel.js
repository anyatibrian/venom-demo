import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})

const Users = mongoose.model('Users', UserSchema)
export default Users