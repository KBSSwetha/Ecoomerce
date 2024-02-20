import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard";

// images import
import Img24 from "../../assets/Shop/Mobiles/p28.jpg";
import Img25 from "../../assets/Shop/Mobiles/p29.jpg";
import Img26 from "../../assets/Shop/Mobiles/p30.jpg";
import Img27 from "../../assets/Shop/Mobiles/p31.jpg";
import Img28 from "../../assets/Shop/Mobiles/p32.jpg";
import Img29 from "../../assets/Shop/Mobiles/p33.jpg";
import Img30 from "../../assets/Shop/Mobiles/p34.jpg";
import Img31 from "../../assets/Shop/Mobiles/p35.jpg";
import Img32 from "../../assets/Shop/Mobiles/p36.jpg";



const ProductsData = [
  {
    id: 1,
    img: Img24,
    title: "Samsung S23",
    price: "12000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img25,
    title:" Iphone 11",
    price: "40200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img26,
    title: "Iphone 13",
    price: "36200",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img27,
    title: "Samsung S20 ",
    price: "25200",
    aosDelay: "600",
  },

  {
    id: 5,
    img: Img28,
    title: "Vivo v20",
    price: "8200",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img29,
    title:  "Oppo A5",
    price: "42000",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img30,
    title: "Vivo X8",
    price: "32000",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img31,
    title:"Oppo B3 ",
    price: "22000",
    aosDelay: "600",
  },

    {
      id: 9,
      img: Img32,
      title: "Nokia N7",
      price: "12000",
      aosDelay: "0",
    },
];

const Mobiles = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        
      
      </div>
    </div>
  );
};

export default Mobiles;