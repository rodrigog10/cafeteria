import { Coffee } from "lucide-react";

export default function Navigate() {
  return (
    <nav className=" flex justify-between items-center gap-4 sm:flex-row  ">
      {/* Ícone do Coffee no lado esquerdo */}
      <div className="bg-amber-100 duration-200  hover:bg-[#ded19d] relative font-fira py-2 shadow-[0_5px_20px]  shadow-[#ded19d] px-5 sm:left-0 flex items-center space-x-2 cursor-pointer">
        <button 
        onClick={() => window.location.reload()}
        className="flex items-center space-x-2 cursor-pointer font-fira text-xl bg-gradient-to-r  from-[#1b281c] via-[#3b573d] to-[#547a56] bg-clip-text text-transparent">
          <span>DrinkAnCoffee</span>
          <Coffee size={22} className="text-[#3b573d]" />
        </button>
      </div>

      {/* Links no lado direito */}
      <div className="items-center mt-8 space-x-8 sm:flex sm:space-x-8 flex-col  sm:flex-row ">
        <a
          href="#products"
          className="bg-amber-100 py-1 px-3 text-[#3b573d] transition  duration-200 hover:bg-[#ded19d] font-fira text-[1rem]"
        >
          Produtos
        </a>
        <a
          href="#testimonials"
          className=" bg-amber-100 py-1 px-3 text-[#3b573d] transition duration-200 hover:bg-[#ded19d] font-fira text-[1rem]"
        >
          Depoimentos
        </a>
        <a
          href="#aboutus"
          className="bg-amber-100 py-1 px-3 text-[#3b573d] transition duration-200 hover:bg-[#ded19d] font-fira text-[1rem] mr-4"
        >
          Sobre Nós
        </a>
      </div>
    </nav>
  );
}
