import AddTodo from "@/components/AddTodo";
import Image from "next/image";

export default function Home() {
   return (
      <main>
         <h1>New header added</h1>
         <h2>TODO NEXT + TYPESCRIPT APP</h2>
         <AddTodo />
      </main>
   );
}
