import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please Enter a Username"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "Please Enter an Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please Enter a Password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.user || mongoose.model("users", userSchema);

export default User;