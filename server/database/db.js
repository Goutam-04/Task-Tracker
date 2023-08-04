import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const ENCODED_PASSWORD = encodeURIComponent(PASSWORD);


const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${ENCODED_PASSWORD}@mern-todo.taunre7.mongodb.net/ToDo`;
    

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with a failure code
      });
};

export default Connection;


