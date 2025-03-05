import express from 'express';
import { createTodo, updateTodo } from './types.js'
import dotEnv from 'dotenv';
import todo from './db.js';
dotEnv.config();
const app = express();
const port = process.env.PORT

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Hi there" }); // Corrected response method
});

app.post("/todo", async (req, res) => {
    try {
        const createPayload = req.body;
        console.log(createPayload);
        const parsedPayload = createTodo.safeParse(createPayload);
        if (!parsedPayload.success) throw Error`${parsedPayload.error}`
        const upData = todo.create({
            title: parsedPayload.data.title,
            description: parsedPayload.data.description
            // discription: parsedPayload.data.disc
            // });
        });
        res.status(200).json({

        })
    }
    catch (err) {
        res.status(400).json({
            msg: err
        })
    }

});


app.get("/todos", async (req, res) => {
    const data = await todo.find({});
    res.status(200).json({
        data
    })
});

app.post("/completed", async (req, res) => {
    try {
        const createPayload = req.body;
        console.log(createPayload);
        const parsedPayload = updateTodo.safeParse(createPayload);
        if (!parsedPayload.success) throw Error`${parsedPayload.error}`
        const upData = await todo.update({
            id: parsedPayload.id
        }, {
            isCompleted: true
        });
        res.status(200).json({
            msg: "TodoMak As done"
        })
    }
    catch (err) {
        res.status(400).json({
            msg: `${err}`
        })
    }
});


app.listen(port, () => console.log(`🚀 Server Running at http://localhost:${port}`));
