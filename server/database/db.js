import mongoose from "mongoose";

const DBConnection = async () =>{
    const MONGODB_URI = `mongodb+srv://b422056:whatisthepassword@share-net.qf1jynb.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Connected to database")
    }catch(e){
        console.log(" Error While connecting with the Database:" + e.message);
    }
}

export default DBConnection