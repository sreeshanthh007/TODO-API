
export interface ITodo {
    _id:string
    title:string
    status: "pending" | "completed" | "in-progress"
    createdAt:Date
    updatedAt:Date
}

export  interface PaginatedTodo{
    total:number
    todos:ITodo[]
}

export interface ITodoModel extends Omit<ITodo, '_id'>, Document {}
