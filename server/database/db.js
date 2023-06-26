import mongoose from "mongoose";

const DBConnection = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true});
        console.log("Connected to database")
    }catch(e){
        console.log(" Error While connecting with the Database:" + e.message);
    }
}

export default DBConnection