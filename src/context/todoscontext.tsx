"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
   id: string;
   task: string;
   completed: boolean;
   createdAt: Date;
};

export type TodosContext = {
   todos: Todo[];
   handleAddTodo: (task: string) => void; //call signature
   handleCheckboxChange: (id: string) => void;
   handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
   const [todos, setTodos] = useState<Todo[]>([]);

   //handle add todo
   const handleAddTodo = (task: string) => {
      setTodos((prev) => {
         const newTodos: Todo[] = [
            {
               id: Math.random().toString(),
               task,
               completed: false,
               createdAt: new Date(),
            },
            ...prev,
         ];
         return newTodos;
      });
   };

   //handle checkbox
   const handleCheckboxChange = (id: string) => {
      setTodos((prev) => {
         const newTodos = prev.map((task) => {
            if (task.id === id) {
               return { ...task, completed: !task.completed };
            }
            return task;
         });
         return newTodos;
      });
   };

   //handle delete todo

   const handleDeleteTodo = (id: string) => {
      setTodos((prev) => {
         const newTodos = prev.filter((todo) => todo.id != id);
         return newTodos;
      });
   };

   return (
      <todosContext.Provider
         value={{
            todos,
            handleAddTodo,
            handleCheckboxChange,
            handleDeleteTodo,
         }}
      >
         {children}
      </todosContext.Provider>
   );
};

//context api | custom hook
export function useTodos() {
   const todosContextValue = useContext(todosContext);
   if (!todosContextValue) {
      throw new Error("UseTodos used outside of Provider");
   }
   return todosContextValue;
}
