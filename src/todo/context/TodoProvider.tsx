import { useReducer } from "react"
import { TodoState } from "../interface/interfaces"
import {TodoContext} from "./TodoContext"
import { todoReducer } from "./todoReducer"

const initialState: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'piedra del alma',
            completed: false
        }
        
    ],
    completed: 0,
    pending: 0
}


interface props {
    children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({children}: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, initialState)

    const toggleTodo  =(id: string) => {
        dispatch({type: 'toggleTodo', payload: {id}})
    }   

  return (
    <>
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    </>
  )
}
