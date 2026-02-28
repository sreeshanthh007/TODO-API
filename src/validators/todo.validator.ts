import z from "zod"


export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters'),
  status: z
    .enum(['pending', 'completed', 'in-progress'], {
      message: 'Status must be pending, completed or in-progress'  // ← use message not errorMap
    })
    .optional()
})


export const updateTodoSchema = z.object({
  title: z
    .string()
    .min(1, 'Title cannot be empty')
    .max(100, 'Title must be less than 100 characters')
    .optional(),
  status: z
    .enum(['pending', 'completed', 'in-progress'], {
      message: 'Status must be pending, completed or in-progress'
    })
    .optional()
})