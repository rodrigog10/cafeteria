"use client";
import { Typewriter } from "react-simple-typewriter";
import Navigate from "./navigate";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-tl from-[#2a3f2c] via-[#3f5b40] to-[#1d2a1e]  py-5 w-full relative">
      <Navigate />

      {/* Flor por cima das folhas */}
      <Image
        src="/leaf2.png"
        alt="plantasla"
        className="
    hidden sm:block 
    absolute 
    lg:bottom-0 lg:left-0
    md:bottom-0 md:left-0 
    sm:bottom-0 sm:left-0
    sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[250px]"
        width={400}
        height={400}
        quality={100}
        priority
      />
      <Image
        src="/flower.png"
        alt="flower"
        className="
    hidden sm:block 
    absolute 
    xl:bottom-[-5rem] xl:right-[2rem] 
    lg:bottom-[-6rem] lg:left-[7rem] 
    md:bottom-[-6rem] md:left-[2rem] 
    sm:bottom-[-3rem] sm:left-[2rem]
    sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[250px]"
        width={300}
        height={300}
        priority
        quality={100}
      />
      <Image
        src="/graos.png"
        alt="cafetop"
        className="
    hidden sm:block 
    absolute 
    xl:bottom-[-5rem] xl:right-[2rem] 
    lg:bottom-[-5rem] lg:right-[1rem] 
    md:bottom-[-5rem] md:right-[-1rem] 
    sm:bottom-[-4rem] sm:right-[-1rem]
    sm:w-[250px] md:w-[300px] lg:w-[370px] xl:w-[400px]"
        width={400}
        height={400}
        quality={100}
        priority
      />

      <div className="flex flex-col items-center mt-[2rem]  justify-center text-center text-amber-100  relative ">
        <h2 className="text-5xl font-fira drop-shadow-[0_0_0.05rem_#000000] text-amber-100 ">
          <Typewriter
            words={[
              "Você está cansado?",
              "O dia está difícil?",
              "Precisa relaxar?",
              "Quer um café?",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <h1 className="text-7xl mt-4 font-fira bg-gradient-to-r drop-shadow-[0_0_0.1rem_#000000] from-black to-amber-950 text-transparent bg-clip-text leading-tight">
          DrinkAnCoffee.
        </h1>

        <div className="w-64 h-[0.1rem] bg-amber-100  mb-[1rem] drop-shadow-[0_0_0.15rem_#000000] shadow-2xl shadow-black"></div>

        <p className="text-lg max-w-2xl font-fira text-amber-100 mt-5 text-center">
          Aqui, oferecemos uma experiência única para os amantes de café. Desde
          os grãos selecionados até a preparação cuidadosa, nossa missão é
          trazer o melhor do café para você. Explore nossos produtos e descubra
          o sabor perfeito para cada momento.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("socials")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-tl-xl mt-5 rounded-br-xl shadow-lg hover:bg-amber-600 transition duration-300 ease-in-out cursor-pointer"
        >
          CONHEÇA
        </button>
      </div>
    </header>
  );
}
