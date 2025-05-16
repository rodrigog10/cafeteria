import Image from "next/image";
export default function Location() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 p-6 mt-[4rem]">
      {/* Tipos de torra */}
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-[#3b573d] text-xl mb-5 font-serif ">
          Experimente os diferentes tipos de torra:
        </h2>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-[#d9c7a1]" />
          <div className="w-12 h-12 rounded-full bg-[#b2b6a4]" />
          <div className="w-12 h-12 rounded-full bg-[#717b56]" />
        </div>
      </div>
      <Image
        src="/umgrao.png"
        alt="colhercomcafe"
        className=" justify-center relative left-[9.5rem] items-center hidden lg:block"
        height={200}
        width={200}
        quality={100}
        priority
      />

      {/* Localização */}
      <div className="border-[#3b573d] border-3 shadow-2xl shadow-black lg:relative bottom-[7.25rem] left-[6.75rem] bg-[#fcf1c4] font-fira w-full max-w-[450px] p-8 mx-auto ">
        <h1 className="text-center text-3xl mb-4 font-inria bg-gradient-to-r from-[#0f160f] via-[#3a553c] to-[#6ea072] text-transparent bg-clip-text ">
          DrinkAnCoffee 
        </h1>
        
        <div className="flex flex-col font-inria gap-2 text-lg mb-5">
          <span> - Rua do café, 123 - Bairro Aromas, Recife - PE </span>
          <span>- Contato: (81) 91234-5678</span>
        </div>
        <div className="flex flex-col text-lg gap-4 mt-2">
          <h1 className="text-3xl mb-2 font-inria bg-gradient-to-r from-[#1b281c] via-[#304632] to-[#6ea072] text-transparent bg-clip-text ">
            Horário de funcionamento:
          </h1>
          <div className="flex flex-col font-inria gap-2 text-lg">
            <span>- Segunda à Sexta: 07:00 AM - 21:00 PM</span>
            <span>- Sabado e Domingo: 09:00 AM - 17:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
