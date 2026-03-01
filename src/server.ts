import { ENV } from "@config/env";
import { Application } from "express";
import express from "express"
import Database from "@config/db"
import cors from "cors"
import morgan from "morgan"
import todoRoute, { TodoRoute } from "@routes/todo.route";

class Server {

    public app : Application
    private port : number | string
    private TodoRoute : TodoRoute
    constructor(){

        this.app = express()
        this.port = ENV.PORT
        this.TodoRoute = todoRoute
        this._ConnectDatabase()
        this._InitializeMiddlewares()
        this._initializeRoutes()
    }


    private async _ConnectDatabase() : Promise<void>{

        await Database.mongoConnect()
    }


    private async _InitializeMiddlewares() : Promise<void>{

        this.app.use(cors({
            origin: ENV.FRONTEND_URL,
            methods:["GET","PATCH","POST","DELETE"]
        }))
        this.app.use(express.json())
        this.app.use(morgan("dev"))

    }

    private async _initializeRoutes() : Promise<void>{
        this.app.use("/todo",this.TodoRoute.Router)

    }

    public listen() :void{

        this.app.listen(ENV.PORT,()=>{
             console.log(`Server running on port ${this.port}`)
        })
    }

}

export default Server