"use client";
import { useTodos } from "@/context/todoscontext";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
   const [todo, setTodo] = useState("");
   const { handleAddTodo } = useTodos();

   const handleformSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      handleAddTodo(todo);
      setTodo("");
   };

   return (
      <form onSubmit={handleformSubmit}>
         <input
            type="text"
            name=""
            value={todo}
            onChange={(event) => {
               setTodo(event.target.value);
            }}
            id=""
         />
         <button type="submit">Add</button>
      </form>
   );
};

export default AddTodo;
