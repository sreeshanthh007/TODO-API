import todoService from "@services/todo.service";
import TodoService from "@services/todo.service";
import { StatusCode } from "@utils/statusCode";
import { Request, Response } from "express";
import { createTodoSchema, updateTodoSchema } from "src/validators/todo.validator";



class TodoController {

    async GetAllTodo(req:Request,res:Response) : Promise<void>{


        try {

           const { page, limit } = req.query as {
                page: string
                limit: string
            }

            const todos = await TodoService.getAll(Number(page),Number(limit))

            if(!todos){
                res.status(StatusCode.NotFound).json({success:false,message:"There are no Todos"})
                return
            }

            res.status(StatusCode.OK).json({success:true,message:"Todo Fetched Successfully",data:todos})
            return
        } catch (error) {
            console.log("error in todo Controller",error)
        }
    }


    async UpdateTodo(req:Request,res:Response) : Promise<void>{

        try {
            
            const todoId = req.params.todoId as string

            const result = updateTodoSchema.safeParse(req.body)
         
            if (!result.success) {
             res.status(StatusCode.BadRequest).json({ success: false, message:  result.error.issues[0].message  })
            return
        }

            if (Object.keys(result.data).length === 0) {
            res.status(StatusCode.BadRequest).json({ success: false, message: 'No fields to update' })
            return
            }

            await todoService.UpdateTodo(todoId,result.data)

            res.status(StatusCode.OK).json({success:true,message:"Todo Updated Successfully"})
            return

        } catch (error) {
            console.log("error in updateTodoController",error)
        }
    }

    async CreateTodo(req:Request,res:Response) : Promise<void>{


        try {
                
                const result = createTodoSchema.safeParse(req.body)

             if (!result.success) {
                res.status(StatusCode.BadRequest).json({ success: false, message:  result.error.issues[0].message})
                return
            }

            await todoService.CreateTodo(result.data)

            res.status(StatusCode.OK).json({success:true,message:"Todo Created Successfully"})
            return
        } catch (error) {
            console.log("error in createTodo",error)
        }
    }


    async removeTodo(req:Request,res:Response) : Promise<void>{

        try {
            
            const todoId = req.params.todoId as string


            if(!todoId){
                res.status(StatusCode.BadRequest).json({success:false,message:"id not found"});
                return
            }


            await todoService.removeTodo(todoId)

            res.status(StatusCode.OK).json({success:true,message:"Todo Removed  Successfully"})
            return 
        } catch (error) {
            console.log("error in removeTodo controller",error)
        }
    }
}

export default new TodoController()