import Image from "next/image";

export default function AboutUs() {
  return (
    
    <div 
    id="aboutus"
    className="about-us-container flex justify-center  items-center flex-wrap gap-[2rem]">
      <Image
        className="drop-shadow-[0.4rem_0.4rem_0.5rem_#000000] my-[2rem] "
        src="/aloja.jpg"
        alt="fotodaloja"
        width={400}
        height={400}
      />
      <div className="p-6">

      
      <h1 className="font-fira text-6xl ">
        Saiba mais <br /> sobre nós.
        </h1>
        
        <div></div>
        <div className="text-[#101911]">
          <p className="mt-6 flex flex-wrap font-inria text-[1.25rem] max-w-[600px] leading-8 ">
            Tudo começou em 2015, em uma pequena cidade no interior
            de Pernambuco. Dois amigos, movidos pela paixão por café e pela
            vontade de criar algo único, decidiram transformar um antigo galpão
            abandonado em um espaço de aromas e encontros. Com um velho moinho
            herdado da família, os primeiros grãos foram
            torrados manualmente, em pequenos lotes que exalavam um perfume
            inconfundível pelas ruas.
          </p>
          <p className="mt-4 flex flex-wrap font-inria text-[1.25rem] max-w-[600px] leading-8">
            Hoje, a empresa continua fiel às suas raízes, mas com os olhos
            no futuro. Selecionando os melhores grãos das regiões mais
            prestigiadas do mundo, aprimorando técnicas de torra e sempre
            valorizando o que nos trouxe até aqui: a conexão entre as pessoas e
            o amor por um bom café.
          </p>
        </div>
      </div>
    </div>
  );
}
