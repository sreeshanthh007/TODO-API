import { UpdateTodoDTO } from "@interfaces/dto/todo.dto";
import { ITodo, PaginatedTodo } from "@interfaces/models/todo.interface";



export interface ITodoRepository{

    findById(id:string) : Promise<ITodo | null>

    save(data:Partial<ITodo>) : Promise<void>

    getAllTodo(page:number,limit:number) : Promise<PaginatedTodo>

    updateTodo(id:string,data:UpdateTodoDTO) :  Promise<void>

    deleteTodo(id:string) : Promise<void>

}