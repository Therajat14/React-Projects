// import zod from { zod };
const zod = requir("zod");

const createTodo = zod.object({
    title: zod.string(),
    des: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});

export { createTodo, updateTodo };