import mongoose from "mongoose";
import dotEnv from 'dotenv';

dotEnv.config();
const URI = process.env.MONGO_URI;
console.log(URI);


mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection failed", err));

const toDoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, // Fixed spelling: "description" description
    isCompleted: { type: Boolean, default: false },
});





const todo = mongoose.model('todos', toDoSchema);
export default todo;