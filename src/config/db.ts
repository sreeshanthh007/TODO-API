import mongoose from "mongoose";

import { ENV } from '@config/env'


class Database {

    private url : string

    constructor(){
        this.url = ENV.MONGO_URL
    }


    public async mongoConnect() : Promise<void>{

        try {
            await mongoose.connect(this.url,{maxPoolSize:5})

            console.log("MongoDB connected successfully")
        } catch (error) {
            console.log("error while connecting MongoDB",error)
            process.exit(1)
        }
    }

    public async mongoDisconnect() : Promise<void>{


        try {
            await mongoose.disconnect()
            console.log("MongoDB disconnecte successfully")
        } catch (error) {
       console.error('MongoDB disconnection failed:', error)
        }
    }
}

export default new Database()
