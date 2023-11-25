const express = require('express')
const mongoose = require('mongoose');

const NAME = "nomio";

const app = express();
app.post('/file', (req,res)=>{
    if(data.length === null){
        res.status(500).send("internal error");
    }else{
        res.send()
    }
})
app.get('/files', (req,res)=>{
    data = {
        "name": NAME
    }
    res.status(200).send('amjilttai', data);
    res.json(data);
})
app.listen(5000,()=>{
    console.log("nomio");
})