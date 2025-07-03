import mongoose, {model,Schema} from "mongoose";

const string = process.env.MONGO_STRING
mongoose.connect(string)

const UserSchema =new Schema ({
    username:{type:String,unique:true},
    password: String
})

 export const UserModel =model('User',UserSchema);