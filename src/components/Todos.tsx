"use client";
import { useTodos } from "@/context/todoscontext";

const Todos = () => {
   const { todos, handleCheckboxChange, handleDeleteTodo } = useTodos();
   let filterTodos = todos;
   return (
      <>
         <ul>
            {filterTodos.map((todo) => {
               return (
                  <li key={todo.id}>
                     <input
                        type="checkbox"
                        name=""
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(todo.id)}
                     />
                     <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                     {todo.completed && (
                        <button
                           type="button"
                           onClick={() => handleDeleteTodo(todo.id)}
                        >
                           DELETE
                        </button>
                     )}
                  </li>
               );
            })}
         </ul>
      </>
   );
};

export default Todos;
