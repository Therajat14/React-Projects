import express from 'express';
import { createTodo, updateTodo } from './types.js';
import dotEnv from 'dotenv';
import todo from './db.js';
import cors from 'cors';

dotEnv.config();
const app = express();
const port = process.env.PORT || 9000; // ✅ Use default port if undefined

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "Hi there" });
});

// ✅ Fixed: Create a new todo
app.post("/todo", async (req, res) => {
    try {
        const parsedPayload = createTodo.safeParse(req.body);
        if (!parsedPayload.success) {
            return res.status(400).json({ error: parsedPayload.error.format() });
        }

        const newTodo = await todo.create({
            title: parsedPayload.data.title,
            description: parsedPayload.data.description,
            isCompleted: false
        });

        res.status(201).json({ message: "Todo created successfully", todo: newTodo });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// ✅ Fixed: Get all todos
app.get("/todos", async (req, res) => {
    try {
        const data = await todo.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// ✅ Fixed: Mark a todo as completed
app.post("/completed", async (req, res) => {
    try {
        const parsedPayload = updateTodo.safeParse(req.body);
        if (!parsedPayload.success) {
            return res.status(400).json({ error: parsedPayload.error.format() });
        }

        const updatedTodo = await todo.findByIdAndUpdate(
            parsedPayload.data.id,
            { isCompleted: true },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.status(200).json({ message: "Todo marked as completed", todo: updatedTodo });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.listen(port, () => console.log(`🚀 Server Running at http://localhost:${port}`));
