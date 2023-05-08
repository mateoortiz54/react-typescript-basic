import { Todo } from "../interface/interfaces"
import { useTodos } from "../hooks/useTodos"

interface props {
    todo: Todo
}



export const TodoItem = ({todo}: props) => {

  // const {toggleTodo} = useContext(TodoContext);


  // const handleDoubleClick = () => {
  //   toggleTodo(todo.id);
  // }
    

  const {toggleTodo} = useTodos();

  return (
    <li 
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }} 
      onDoubleClick={() => toggleTodo(todo.id)}
      >
        
      {todo.desc}
        
    </li>
  )
}
