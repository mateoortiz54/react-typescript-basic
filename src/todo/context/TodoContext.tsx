import { createContext } from "react";
import { TodoState } from "../interface/interfaces";

export type TodoContextProps = {
    todoState : TodoState;
    toggleTodo: (id: string) => void;

}

// Le decimos de igual manera que los {} en un futuro van a ser el mismo tipo
// asi nos salteamos la alerta o error 
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps );
