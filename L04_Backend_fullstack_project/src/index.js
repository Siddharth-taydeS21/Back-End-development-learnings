import dns from "node:dns";
import mongoose from "mongoose";
import express from 'express'
import 'dotenv/config'
import connectDb from "./db/index.js";
import { DB_NAME } from "./constants.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// First approach of connecting a DataBase with a Full stack project (recommended)
connectDb();

//second approach of connecting a DataBase with a Full stack project (Using IIFE)
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log('MongoDb connected successfully!');

//         app.on('error', (error) => {
//             console.log("Server Error: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Sever is Running at http://localhost:$${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log('MongoDb connection Error: ', error);
//         process.exit(1);
//     }
// })()