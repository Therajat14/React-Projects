import mongoose from "mongoose";

const URI = "mongodb+srv://therajat14:therajat14@therajat14.yma6r.mongodb.net/todoApp";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection failed", err));
