import mongoose from "mongoose";

export const connectDatabase=async()=>{
    try{
        const response=await mongoose.connect(process.env.MONGODB_URI);
        console.log(response.connection.host);
    }catch(error){
        console.log("Error while connecting to Database");
        console.log(error);
    }
}