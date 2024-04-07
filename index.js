const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
//const ClientModel=require("./models/ClientModule")
app.use(express.json())
app.use(cors())

const db = mongoose.createConnection("mongodb://127.0.0.1:27017/ClientDB");
const ClientModel = db.model( 'clients',new mongoose.Schema({
    lastname: String,
    firstname: String,
    email:String,
    password:String
}))

app.post('/register',(req,res)=>{
    const {email, password}=req.body;

    ClientModel.find({email :email}).then(user=>{
        if(user.length===0){
            ClientModel.create(req.body).catch(err=>res.json(err)) 
            res.json('succeded')
            }    else res.json("Account Already exist");
    })
}) 


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    ClientModel.find({ email: email })
        .then(users => {
            if (users.length > 0) {
                const user = users[0]; // Assuming only one user per email
                if (user.password === password) {
                    res.json('Succeeded');
                } else {
                    res.json('Incorrect password');
                }
            } else {
                res.json('Failed login');
            }
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(3001,()=>console.log('server is running'))