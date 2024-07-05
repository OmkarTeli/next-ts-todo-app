import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import Image from "next/image";

export default function Home() {
   return (
      <main>
         <h2>TODO NEXT + TYPESCRIPT APP</h2>
         <AddTodo />
         <Todos />
      </main>
   );
}
