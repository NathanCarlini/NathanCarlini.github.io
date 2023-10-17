"use client";
import "./globals.css";

export default function Homepage() {
  return (
    <>
      <div className="lg: flex flex-col justify-center gap-4">
        <p className="ml-5 grow-0 text-2xl font-extrabold text-white sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl">
          Student
        </p>
        <p className="ml-5 font-sans text-6xl font-black text-purp  md:text-7xl lg:text-7xl xl:text-8xl">
          WEB & APP <br />
          &emsp; DEVELOPPER
        </p>
        <p className="ml-5 grow-0 text-xl text-white sm:text-4xl lg:text-4xl xl:text-5xl">
          Webdev and communication student based in Limoges, I specialize mainly
          in ReactJS and Next.
        </p>
      </div>
    </>
  );
}
