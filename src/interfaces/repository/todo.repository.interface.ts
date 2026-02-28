import { UpdateTodoDTO } from "@interfaces/dto/todo.dto";
import { ITodo } from "@interfaces/models/todo.interface";



export interface ITodoRepository{

    findById(id:string) : Promise<ITodo | null>

    save(data:Partial<ITodo>) : Promise<void>

    getAllTodo() : Promise<ITodo[]>

    updateTodo(id:string,data:UpdateTodoDTO) :  Promise<void>

    deleteTodo(id:string) : Promise<void>

}