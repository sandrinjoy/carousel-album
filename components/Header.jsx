import React from "react";

export default function Header() {
  return (
    <header className="z-[1000] bg-neutral-50  sticky top-0  w-full p-5    flex  flex-col md:flex-row justify-center items-center md:justify-between transition duration-300 ease-in-out">
      <h1 className="text-3xl">Carousel Albums</h1>
    </header>
  );
}
