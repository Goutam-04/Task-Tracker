import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);

export  {ToDo,todoSchema};
