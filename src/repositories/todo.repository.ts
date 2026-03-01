import { UpdateTodoDTO } from "@interfaces/dto/todo.dto";
import { ITodo, PaginatedTodo } from "@interfaces/models/todo.interface";
import { ITodoRepository } from "@interfaces/repository/todo.repository.interface";
import todoSchema from "@models/todo.schema";


export class TodoRepository implements ITodoRepository{

    async save(data: Partial<ITodo>): Promise<void> {
        await todoSchema.create(data)        
    }


    async getAllTodo(page:number,limit:number): Promise<PaginatedTodo> {
        const skip = (page - 1) * limit
        const [todos,total] = await Promise.all([
            todoSchema.find().skip(skip).limit(limit).sort({createdAt:-1}).lean(),
            todoSchema.countDocuments()
        ]);

         const mapped = todos.map((todo) => ({
        ...todo,
        _id: todo._id.toString()  
    }))

    return { todos: mapped, total }
    }

    async updateTodo(id: string, data: UpdateTodoDTO): Promise<void> {
        await todoSchema.findByIdAndUpdate(id,{title:data.title,status:data.status},{new:true})
    }

    async findById(id: string): Promise<ITodo | null> {
        return await todoSchema.findById(id)
    }

    async deleteTodo(id: string): Promise<void> {
        await todoSchema.findByIdAndDelete(id)
    }
}