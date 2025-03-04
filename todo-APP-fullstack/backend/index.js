import express from 'express';
import { createTodo, updateTodo } from './types';
const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Hi there" }); // Corrected response method
});
app.post("/todo", (req, res) => {
    res.json({ msg: "Hi there" }); // Corrected response method
});

app.get("/todos", (req, res) => {
    res.json({ msg: "Hi there" }); // Corrected response method
});

app.post("/completed", (req, res) => {
    res.json({ msg: "Hi there" }); // Corrected response method
});


app.listen(3500, () => console.log("🚀 Server Running at http://localhost:3500"));
