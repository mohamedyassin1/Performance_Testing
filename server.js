//Hello world
const express = require('express');
const app = express();
const cors = require('cors');
const { connect, Document } = require('./db/mongodb');

const PORT = 3000;

app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

connect();

// http://localhost:3000/getData?id=4&value=100
app.get('/getData',async (req,res)=>{
    const { id, value } = req.query;
    const detailed_info = {
        key: "3",
        age:19,
        hobby: "Basketball",
        job: "Software Engineer"
    }
    console.log(`Received ${id}, ${value}`);
    const newData = { data: value, info: detailed_info };
    try{
        await Document.create({ _id: id, data: value, info: detailed_info});
        await Document.findByIdAndUpdate(id, newData);
        const dataRetrieved = await Document.findById(documentId);
        res.send(JSON.stringify(dataRetrieved));
    }catch(e){
        // console.log(e);
        await Document.findByIdAndUpdate(id, newData);
        const dataRetrieved = await Document.findById(documentId);
        res.send(JSON.stringify(dataRetrieved));
    }
});

app.post('/addData',async (req,res)=>{

});

app.listen(PORT,()=>{
    console.log(`✌ Listening on port ${PORT}`)
});