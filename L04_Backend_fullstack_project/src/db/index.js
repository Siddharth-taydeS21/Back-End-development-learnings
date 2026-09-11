import mongoose from 'mongoose'
import 'dotenv/config'
import { DB_NAME } from '../constants.js'

// First approach of connecting a DataBase with our Full stack project
export default async function connectDb() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDb connected successfully!');
    } catch (error) {
        console.log('MongoDb connection Error: ', error)
        process.exit(1); // node js feature (currently unexplored)
    }
}