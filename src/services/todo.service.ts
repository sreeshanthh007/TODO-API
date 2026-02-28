import { CreateTodoDTO, TodoResponseDTO, UpdateTodoDTO } from "@interfaces/dto/todo.dto";
import { ITodoRepository } from "@interfaces/repository/todo.repository.interface";
import { TodoRepository } from "@repositories/todo.repository";


 class TodoService {

    private TodoRepository : ITodoRepository

    constructor(){
        this.TodoRepository = new TodoRepository()
    }



    async getAll() : Promise<TodoResponseDTO[]>{

        return await this.TodoRepository.getAllTodo()
    }


    async CreateTodo(data:CreateTodoDTO) : Promise<void>{

        await this.TodoRepository.save(data)
    }

    async UpdateTodo(id:string,data:UpdateTodoDTO) : Promise<void>{

        try {
            const todo = await this.TodoRepository.findById(id)

            if(!todo){
                throw new Error("Todo Not Found")
            }

        await this.TodoRepository.updateTodo(id,data)
        } catch (error) {
            console.log("error in updateTodo service",error)
        }
    }

    async removeTodo(id:string) : Promise<void>{

        try {
            const todo = await  this.TodoRepository.findById(id)

            if(!todo){
                throw new Error("Todo not found")
            }

            await this.TodoRepository.deleteTodo(id)
        } catch (error) {
            console.log("error in remove todo",error)
        }
    }

}

export default new TodoService()