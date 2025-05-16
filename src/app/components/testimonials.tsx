"use client";
import useEmblaCarousel from "embla-carousel-react";
import client1 from "../../../public/client1.png";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que descobri a DrinkAnCoffee, meu conceito de café mudou completamente. O aroma único, o sabor marcante e o ambiente acolhedor me fazem voltar sempre. É o melhor lugar para começar o dia ou simplesmente relaxar com uma boa xícara.",
    author: "Ana Clara",
    role: "Cliente desde 2017.",
    image: client1,
  },

];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section>
      <div 
      id="testimonials"
      className="testimonials-container container mx-auto">
        <h1 className="bg-gradient-to-r my-[2rem]  font-fira text-4xl from-black via-[#3a553c] to-[#6ea072] bg-clip-text text-transparent text-center ">
          Depoimentos:
        </h1>
        <div className="relative max-w-3xl mx-auto select-none">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#3a553c]  text-white p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-amber-100 font-inria max-w-2xl">{item.content}</p>

                      <div>
                        <p className="font-fira">{item.author}</p>
                        <p className="text-sm text-neutral-400 font-fira">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center rounded-full bg-[#5c855d] cursor-pointer w-15 h-15 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2"
            >
              <ChevronLeft
                size={40}
                className="w-6 h-6 font-bold  text-amber-100"
              />
            </button>
            <button
              onClick={scrollNext}
              className="flex items-center justify-center rounded-full bg-[#5c855d] cursor-pointer w-15 h-15 absolute -right-11 -translate-y-1/2 -translate-x-1/2 top-1/2"
            >
              <ChevronRight
                size={40}
                className="w-6 h-6 font-bold text-amber-100"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
