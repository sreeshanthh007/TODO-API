import { ITodoModel } from "@interfaces/models/todo.interface";
import mongoose, { Schema } from "mongoose";


const TodoSchema = new Schema<ITodoModel>(

    {
        title:{
            type:String,
            required:true
        },

        status:{
            type:String,
            enum: ['pending', 'completed', 'in-progress'],
            default:"pending"
        },
    },

    {
        timestamps:true
    }
);


export default mongoose.model<ITodoModel>("Todo",TodoSchema)