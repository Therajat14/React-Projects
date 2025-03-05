import z from "zod";
const createTodo = z.object({
    title: z.string()
        .min(3, { message: "Title must be at least 3 characters long" })
        .max(100, { message: "Title too long (max 100 characters)" }),

    description: z.string()  // Fixed spelling: "description" description
        .min(5, { message: "Description must be at least 5 characters" })
        .max(500, { message: "Description too long (max 500 characters)" })
});

const updateTodo = z.object({
    id: z.string()
        .length(24, { message: "Invalid ID: Must be a 24-character MongoDB ObjectId" })
        .regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid ID format: Must be a valid MongoDB ObjectId" })
});

export { createTodo, updateTodo }