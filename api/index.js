const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/register',(req,res)=>{
    const {username, password} = req.body;
    res.json({requestData: {username,password}});
});

app.listen(3500);
//bzdqlQJAGjeBGOBs
//mongodb+srv://disha:bzdqlQJAGjeBGOBs@cluster0.ifhsgph.mongodb.net/?retryWrites=true&w=majority