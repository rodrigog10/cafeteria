import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Social() {
  return (
    <div 
    id="socials"
    className="social-container my-[6rem] bg-[#3f5b40] relative mx-auto max-w-[72rem] flex items-center gap-6 p-8 shadow-2xl shadow-black">
      <Image
        src="/cafes.jpg"
        alt="cafesvapo"
        width={350}
        height={350}
        className="absolute right-[4rem] rounded-3xl shadow-2xl shadow-black"
      />

      <div>
        <h1 className="text-5xl text-amber-100">
          DESCUBRA O <br /> SEU CAFÉ FAVORITO
        </h1>
        <p className="font-inria text-lg my-[1rem] mt-5 text-amber-100 max-w-[600px]">
          Cada xícara é preparada com toda a nossa dedicação, a qual é feita
          para você. Estamos determinados a prestar o melhor serviço a todos,
          utilizando desde os grãos mais refinados e bem preparados com os
          melhores ingredientes selecionados.
        </p>
        

        <div className="flex gap-6 mt-[4rem]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-10 h-10 text-amber-100 transition duration-200 hover:text-[#4d68a3]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-10 h-10 text-amber-100 transition duration-200 hover:text-[#1a91da]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-10 h-10 text-amber-100 transition duration-200 hover:text-[#a12f68]" />
          </a>
        </div>
      </div>
    </div>
  );
}
