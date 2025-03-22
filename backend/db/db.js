import mongoose from "mongoose";
import dotenv from 'dotenv';
import { configDotenv } from "dotenv";


function connect (){
    mongoose.connect('mongodb://0.0.0.0/soen')
    .then(()=>{
        console.log('Connected to database');
    })
    .catch(err =>{
        console.log(err);
    })
}

export default connect;