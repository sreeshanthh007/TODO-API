import todoController from "@controllers/todo.controller";
import { Router } from "express";



export class TodoRoute {

    public Router : Router

    constructor(){
        this.Router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes() : void{

        this.Router.get("/todos",todoController.GetAllTodo.bind(todoController));

        this.Router.patch("/edit-todo/:todoId",todoController.UpdateTodo.bind(todoController));

        this.Router.post("/create-todo",todoController.CreateTodo.bind(todoController));

        this.Router.delete("/todo-delete/:todoId",todoController.removeTodo.bind(todoController))

    }
}

export default new TodoRoute()