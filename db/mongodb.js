const mongoose = require("mongoose")

const MongooseDocument = new mongoose.Schema({
  _id: String,
  data: String,
  info: Object,
});

const mongodbEndpoint = `mongodb://127.0.0.1:27017`;

async function connect(){
    try{
        await mongoose.connect(mongodbEndpoint);
    }catch(e){
        console.log(`Error connecting to mongodb: ${e}`);
    }
}

module.exports = {
    connect,
    Document: mongoose.model("Document", MongooseDocument)
}