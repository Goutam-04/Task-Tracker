import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.taunre7.mongodb.net/ToDo/`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB Atlas:', error.message);
            process.exit(1); // Exit the process with a failure code
        });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB Atlas');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.error('MongoDB Connection Error:', error.message);
    });
}

export default Connection;

