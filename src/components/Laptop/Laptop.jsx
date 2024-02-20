import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard";

import Img15 from "../../assets/Shop/Laptop/p18.jpg";
import Img16 from "../../assets/Shop/Laptop/p19.jpg";
import Img17 from "../../assets/Shop/Laptop/p20.jpg";
import Img18 from "../../assets/Shop/Laptop/p21.jpg";
import Img19 from "../../assets/Shop/Laptop/p22.jpg";

import Img20 from "../../assets/Shop/Laptop/p23.jpg";
import Img21 from "../../assets/Shop/Laptop/p24.jpg";
import Img22 from "../../assets/Shop/Laptop/p25.jpg";
import Img23 from "../../assets/Shop/Laptop/p26.jpg";

const ProductsData = [
    {
      id: 1,
      img: Img15,
      title: "Printed H ",
      price: "55220",
      aosDelay: "600",
    },
  
    {
      id: 2,
      img: Img16,
      title: "Hp Laptop",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 3,
      img: Img17,
      title: "MacBook A",
      price: "67420",
      aosDelay: "200",
    },
    {
      id: 4,
      img: Img18,
      title: "MacBook B",
      price: "98320",
      aosDelay: "400",
    },
    {
      id: 5,
      img: Img19,
      title: "MacBook C ",
      price: "67220",
      aosDelay: "600",
    },
 
    {
      id: 6,
      img: Img20,
      title: "Dell A",
      price: "43120",
      aosDelay: "0",
    },
    {
      id: 7,
      img: Img21,
      title: "Dell B",
      price: "32420",
      aosDelay: "200",
    },
    {
      id: 8,
      img: Img22,
      title: "VivoBook A",
      price: "53320",
      aosDelay: "400",
    },
    {
      id: 9,
      img: Img23,
      title: "VivoBook B ",
      price: "42200",
      aosDelay: "600",
    },

];
  
  const Laptop = () => {
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



export default Laptop;