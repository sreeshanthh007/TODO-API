import { UpdateTodoDTO } from "@interfaces/dto/todo.dto";
import { ITodo } from "@interfaces/models/todo.interface";
import { ITodoRepository } from "@interfaces/repository/todo.repository.interface";
import todoSchema from "@models/todo.schema";


export class TodoRepository implements ITodoRepository{

    async save(data: Partial<ITodo>): Promise<void> {
        await todoSchema.create(data)        
    }


    async getAllTodo(): Promise<ITodo[]> {
        return await todoSchema.find()
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