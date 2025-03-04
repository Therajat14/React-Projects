const { z } = require("zod");

const createTodo = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long").max(100, "Title too long"),
    des: z.string().min(5, "Description must be at least 5 characters").max(500, "Description too long"),
});

const updateTodo = z.object({
    id: z.coerce.number().int().positive("ID must be a positive integer"),
    // title: z.string().min(3).max(100).optional(),
    // des: z.string().min(5).max(500).optional(),
    // completed: z.coerce.boolean().optional(),
});

module.exports = { createTodo, updateTodo };
