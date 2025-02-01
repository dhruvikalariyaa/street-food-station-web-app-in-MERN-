import mongoose from "mongoose";    

export const connectDB =async()=>{
    await mongoose.connect('your mongodb url').then(()=>console.log("DB connected"));
}
