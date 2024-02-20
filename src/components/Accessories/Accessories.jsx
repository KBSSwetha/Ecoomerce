import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

import Img8 from "../../assets/Shop/Accessories/p10.jpg";
import Img9 from "../../assets/Shop/Accessories/p11.jpg";
import Img10 from "../../assets/Shop/Accessories/p12.jpg";
import Img11 from "../../assets/Shop/Accessories/p13.jpg";
import Img12 from "../../assets/Shop/Accessories/p14.jpg";
import Img13 from "../../assets/Shop/Accessories/p15.jpg";
import Img14 from "../../assets/Shop/Accessories/p16.jpg";

import Img33 from "../../assets/Shop/Accessories/p40.jpg";
import Img34 from "../../assets/Shop/Accessories/p41.jpg";
import Img35 from "../../assets/Shop/Accessories/p42.jpg";
import Img36 from "../../assets/Shop/Accessories/p43.jpg";
import Img37 from "../../assets/Shop/Accessories/p44.jpg";
import Img38 from "../../assets/Shop/Accessories/p45.jpg";
import Img39 from "../../assets/Shop/Accessories/p50.jpg";
import Img40 from "../../assets/Shop/Accessories/p51.jpg";
import Img41 from "../../assets/Shop/Accessories/p52.jpg";
import Img42 from "../../assets/Shop/Accessories/p53.jpg";
import Img43 from "../../assets/Shop/Accessories/p54.jpg";
import Img44 from "../../assets/Shop/Accessories/p55.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "1200",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat Watch",
    price: "4200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Headphone A",
    price: "3200",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed Headphone ",
    price: "2200",
    aosDelay: "600",
  },


  {
    id: 5,
    img: Img5,
    title: "Noise Headphone",
    price: "9120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Nellson",
    price: "5420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Gag Headphones",
    price: "3820",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img5,
    title: "Printed B",
    price: "7220",
    aosDelay: "600",
  },


    {
      id: 9,
      img: Img8,
      title: "Boat Earpods",
      price: "1920",
      aosDelay: "0",
    },
    {
      id: 10,
      img: Img9,
      title: "Rocky Earpods",
      price: "4820",
      aosDelay: "200",
    },
    {
      id: 11,
      img: Img10,
      title: "Gogs C",
      price: "3620",
      aosDelay: "400",
    },
    {
      id: 12,
      img: Img11,
      title: "Printed EP ",
      price: "2270",
      aosDelay: "600",
    },
 
    {
      id: 13,
      img: Img12,
      title: "Airpods",
      price: "16120",
      aosDelay: "0",
    },
    {
      id: 14,
      img: Img13,
      title: "Rocky M ",
      price: "4520",
      aosDelay: "200",
    },
    {
      id: 15,
      img: Img14,
      title: "Lem 4",
      price: "3420",
      aosDelay: "400",
    },
    {
      id: 16,
      img: Img33,
      title: "Samsung S3",
      price: "42000",
      aosDelay: "200",
    },
    {
      id: 17,
      img: Img34,
      title: "Samsung S4",
      price: "32010",
      aosDelay: "400",
    },
    {
      id: 18,
      img: Img35,
      title: "Samsung s5 ",
      price: "12200",
      aosDelay: "600",
    },
 
    {
      id: 19,
      img: Img36,
      title: "Boat Watch",
      price: "1200",
      aosDelay: "0",
    },
    {
      id: 20,
      img: Img37,
      title: "Rocky W34",
      price: "4200",
      aosDelay: "200",
    },
    {
      id: 21,
      img: Img38,
      title: "Gag W23",
      price: "3200",
      aosDelay: "400",
    },
    {
      id: 22,
      img: Img39,
      title: "HR VR ",
      price: "22000",
      aosDelay: "600",
    },

    {
      id: 23,
      img: Img40,
      title: "Boat VR",
      price: "12000",
      aosDelay: "0",
    },
    {
      id: 24,
      img: Img41,
      title: "Rocky VR4",
      price: "42000",
      aosDelay: "200",
    },
    {
      id: 25,
      img: Img42,
      title: "GAG VR7",
      price: "32000",
      aosDelay: "400",
    },
    {
      id: 26,
      img: Img43,
      title: "PAPYR 35 ",
      price: "22000",
      aosDelay: "600",
    },
  ];

  const Accessories = () => {
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

export default Accessories;