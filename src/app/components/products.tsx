import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Café Blend",
    roast: "Torra Escura",
    reviews: 16,
    price: "R$ 19,90",
    image: "/product1.png",
    stars: 4,
  },
  {
    id: 2,
    name: "Café Branco",
    roast: "Torra Clara",
    reviews: 12,
    price: "R$ 28,50",
    image: "/product2.png",
    stars: 4,
  },
  {
    id: 3,
    name: "Café Premium",
    roast: "Torra Escura",
    reviews: "23",
    price: "R$ 32,90",
    image: "/product3.png",
    stars: 5,
  },
  {
    id: 4,
    name: "Café Latte",
    roast: "Torra Clara",
    reviews: "17",
    price: "R$ 24,90",
    image: "/product4.png",
    stars: 5,
  },
];

export default function Products() {
  return (
    <div 
    id="products"
    className="flex flex-wrap gap-[4rem]  font-inria text-items-center justify-center text-center text-black relative">
      {products.map((product) => {
        // Renderizando estrelas
        const fullStars = Math.floor(product.stars);

        const renderStars = [...Array(fullStars).fill("full")];

        return (
          <div key={product.id}>
            <Image
              className="drop-shadow-[0.4rem_0.4rem_0.5rem_#000000]"
              src={product.image}
              alt={product.name}
              width={product.id === 3 ? 170 : 200}
              height={product.id === 3 ? 170 : 200}
            />
            
            <h2 className={`text-2xl mt-2 ${product.id === 3 ? "mt-6" : ""}`}>
              {product.name}
              
            </h2>
            <h3 className="font-semibold my-2 text-neutral-600">{product.roast}</h3>
            <div className="flex justify-center items-center my-2 gap-1">
              {renderStars.map((type, index) => (
                <Image
                  key={index}
                  src={"/star.png"}
                  alt="estrela"
                  width={16}
                  height={16}
                />
              ))}
              <p className="ml-1">({product.reviews})</p>
            </div>
            
            

            <h4 className="my-2 text-lg mb-20">{product.price}</h4>
          </div>
        );
      })}
    </div>
  );
}
