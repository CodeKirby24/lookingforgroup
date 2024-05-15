const userModel = require("./userSchema");
const postModel = require('./postSchema');

const server = 'mongodb+srv://egguwu:CodeKirby24@cluster0.zwunwic.mongodb.net/LFG'
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
mongoose.connect(server);
app.use(cors());
app.use(express.json());

app.get('/users', async(req, res) => {
    let data = await userModel.find()
    console.log(data)
    // res.status(200).json(data);
})

app.post('/users/upload', async(req, res) => {
    // console.log(req.body)
    let data = await userModel.create(req.body);
    res.status(201).json({data})
})





app.post('/userData/upload', async (req, res) => {
  let content = req.body;
  console.log(content, 'content data');
  let data = await postModel.create(req.body)
  res.status(201).json({data});
})

app.listen(3002, () => {
    console.log('Server is listening on port 3002')
})