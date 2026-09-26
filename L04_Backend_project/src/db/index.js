import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

const connectDb = async () => {
    try {
        const dbConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDb connected Successfully!, Host: ${dbConnectionInstance.connection.host}`)
    } catch (error) {
        console.log('MongoDb connection Failed : ', error)
        process.exit(1)
    }
}

export default connectDb;