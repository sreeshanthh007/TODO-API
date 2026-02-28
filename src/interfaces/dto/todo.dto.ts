


export interface TodoResponseDTO {
  _id: string
  title: string
  status: 'pending' | 'completed' | 'in-progress'
  createdAt: Date
  updatedAt: Date
}


export interface CreateTodoDTO {
  title: string
  status?: 'pending' | 'completed' | 'in-progress'
}


export interface UpdateTodoDTO {
  title?: string
  status?: 'pending' | 'completed' | 'in-progress'
}