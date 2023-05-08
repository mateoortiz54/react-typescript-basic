import { TodoState, Todo } from "../interface/interfaces";

type TodoAction = 
    | {type: 'addtodo', payload: Todo}
    | {type: 'toggleTodo', payload : {id: string}}


// Va a devolver un TodoState
export const todoReducer = (state: TodoState, action: TodoAction):TodoState => {

    switch (action.type) {
        case 'addtodo':
            
            return {
                ...state,
                todos : [...state.todos, action.payload]
            };

        case 'toggleTodo':
        
            return {
                ...state,
                todos : state.todos.map(({...todo}) => {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }

        default:
            return state;
    }

}
