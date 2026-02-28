import { ENV } from "@config/env";
import { Application } from "express";
import express from "express"
import Database from "@config/db"
import cors from "cors"

class Server {

    public app : Application
    private port : number | string

    constructor(){

        this.app = express()
        this.port = ENV.PORT

        this._ConnectDatabase()
        this._InitializeMiddlewares()
    }


    private async _ConnectDatabase() : Promise<void>{

        await Database.mongoConnect()
    }


    private async _InitializeMiddlewares() : Promise<void>{

        this.app.use(cors({
            origin: ENV.FRONDEND_URL,
            methods:["GET","PATCH","POST"]
        }))
        this.app.use(express.json())

    }

    public listen() :void{

        this.app.listen(ENV.PORT,()=>{
             console.log(`Server running on port ${this.port}`)
        })
    }

}

export default Server