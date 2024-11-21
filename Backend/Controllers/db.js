const mongoose =require("mongoose");
const mongoURL="mongodb+srv://abhiroy123:roy123@cluster0.f8izr5i.mongodb.net/User";

const connectToMongo=async()=>{
    try{
        mongoose.connect(mongoURL);
        console.log("connected to mongodb");
    } catch {
        console.log(error);
    }
};
module.exports=connectToMongo;