import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = [
  {
    id: 1,
    img: "/img/p1-1.jpg",
    hoverImg: "/img/p1.jpg",
    model: "Model 0001: Black",
    price: 145,
    topText: "Selling fast",
  },
  {
    id: 2,
    img: "/img/p-2.jpg",
    hoverImg: "/img/p-22.jpg",
    model: "Model 0001: Black",
    price: 145,
  },
  {
    id: 3,
    img: "/img/p-3.jpg",
    hoverImg: "/img/p-33.jpg",
    model: "Model 0001: Black",
    price: 145,
  },
  {
    id: 4,
    img: "/img/p-4a.jpg",
    hoverImg: "/img/p-4.jpg",
    model: "Model 0001: Black",
    price: 145,
  },
  {
    id: 5,
    img: "/img/p-15.jpg",
    hoverImg: "/img/p-5a.jpg",
    model: "Model 0001: Black",
    price: 145,
  },
  {
    id: 6,
    img: "/img/p-6.jpg",
    hoverImg: "/img/p-6a.jpg",
    model: "Model 0001: Black",
    topText: "Top Selling",
    price: 145,
  },
];

const Featured = () => {
  return (
    <div className=" w-full my-6 lg:my-12 flex items-center">
      {/* main container */}
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-center  ">
        {/* container */}
        <div className="w-full ">
          {/* top heading container  */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl">Explore Model 000</h1>
            <Link href="/" className="underline text-xl md:text-2xl">
              Shop Now
            </Link>
          </div>
          {/* Products Container  */}
          <div className="my-4 grid w-full gap-x-[5px] gap-y-2 grid-cols-[repeat(2,1fr)] md:gap-x-3 md:gap-y-3.5 md:grid-cols-[repeat(3,1fr)]">
            {FeaturedProduct.map((item) => (
              <Link
                key={item.id}
                className=" h-[180px] md:h-[250px] lg:h-[400px] rounded-2xl relative overflow-hidden group/img cursor-pointer"
                href={`/product/${item.id}`}
              >
                {/* Image container */}
                <div className="relative h-full w-full group-hover/img:hidden">
                  <Image src={item.img} fill alt="" className="object-cover" />
                </div>
                <div className="invisible opacity-0 group-hover/img:visible group-hover/img:opacity-100 duration-300 transition-all relative h-full w-full">
                  <Image
                    src={item.hoverImg}
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                {/* info container */}
                <div className="h-full w-full absolute flex justify-between flex-col top-0 p-4">
                  {item.topText ? (
                    <span className=" p-1 px-3 bg-white rounded-full w-max text-xs md:text-sm">
                      {item.topText}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  {/* product info */}
                  <div className="flex items-center justify-between group-hover/img:text-white">
                    <span className="text-sm md:text-base">{item.model}</span>
                    <span className="text-gray-600 group-hover/img:text-white">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className="mt-2 p-3 px-6 bg-yellow-300 hover:bg-yellow-400 transition-all float-right text-xl rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
