import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Hero />
        </main>
    </div>
  );
}
