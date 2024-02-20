import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Products/ProductCard";

// images import
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
{/**Laptop */}
import Img15 from "../../assets/Shop/Laptop/p18.jpg";
import Img16 from "../../assets/Shop/Laptop/p19.jpg";
import Img17 from "../../assets/Shop/Laptop/p20.jpg";
import Img18 from "../../assets/Shop/Laptop/p21.jpg";
import Img19 from "../../assets/Shop/Laptop/p22.jpg";

import Img20 from "../../assets/Shop/Laptop/p23.jpg";
import Img21 from "../../assets/Shop/Laptop/p24.jpg";
import Img22 from "../../assets/Shop/Laptop/p25.jpg";
import Img23 from "../../assets/Shop/Laptop/p26.jpg";

{/**Mobiles */}
import Img24 from "../../assets/Shop/Mobiles/p28.jpg";
import Img25 from "../../assets/Shop/Mobiles/p29.jpg";
import Img26 from "../../assets/Shop/Mobiles/p30.jpg";
import Img27 from "../../assets/Shop/Mobiles/p31.jpg";
import Img28 from "../../assets/Shop/Mobiles/p32.jpg";
import Img29 from "../../assets/Shop/Mobiles/p33.jpg";
import Img30 from "../../assets/Shop/Mobiles/p34.jpg";
import Img31 from "../../assets/Shop/Mobiles/p35.jpg";
import Img32 from "../../assets/Shop/Mobiles/p36.jpg";

{/**Accessories */}
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



const Products = [
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
      img: Img15,
      title: "Printed H ",
      price: "55220",
      aosDelay: "600",
    },
  
    {
      id: 17,
      img: Img16,
      title: "Hp Laptop",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 18,
      img: Img17,
      title: "MacBook A",
      price: "67420",
      aosDelay: "200",
    },
    {
      id: 19,
      img: Img18,
      title: "MacBook B",
      price: "98320",
      aosDelay: "400",
    },
    {
      id: 20,
      img: Img19,
      title: "MacBook C ",
      price: "67220",
      aosDelay: "600",
    },
 
    {
      id: 21,
      img: Img20,
      title: "Dell A",
      price: "43120",
      aosDelay: "0",
    },
    {
      id: 22,
      img: Img21,
      title: "Dell B",
      price: "32420",
      aosDelay: "200",
    },
    {
      id: 23,
      img: Img22,
      title: "VivoBook A",
      price: "53320",
      aosDelay: "400",
    },
    {
      id: 24,
      img: Img23,
      title: "VivoBook B ",
      price: "42200",
      aosDelay: "600",
    },

    {
      id: 25,
      img: Img24,
      title: "Samsung S23",
      price: "12000",
      aosDelay: "0",
    },
    {
      id: 26,
      img: Img25,
      title: "Iphone 11",
      price: "40200",
      aosDelay: "200",
    },
    {
      id: 27,
      img: Img26,
      title: "Iphone 13",
      price: "36200",
      aosDelay: "400",
    },
    {
      id: 28,
      img: Img27,
      title: "Samsung S20 ",
      price: "25200",
      aosDelay: "600",
    },
 
    {
      id: 29,
      img: Img28,
      title: "Vivo v20",
      price: "8200",
      aosDelay: "0",
    },
    {
      id: 30,
      img: Img29,
      title: "Oppo A5",
      price: "42000",
      aosDelay: "200",
    },
    {
      id: 31,
      img: Img30,
      title: "Vivo X8",
      price: "32000",
      aosDelay: "400",
    },
    {
      id: 32,
      img: Img31,
      title: "Oppo B3 ",
      price: "22000",
      aosDelay: "600",
    },
  
    {
      id: 33,
      img: Img32,
      title: "Nokia N7",
      price: "12000",
      aosDelay: "0",
    },
    {
      id: 34,
      img: Img33,
      title: "Samsung S3",
      price: "42000",
      aosDelay: "200",
    },
    {
      id: 35,
      img: Img34,
      title: "Samsung S4",
      price: "32010",
      aosDelay: "400",
    },
    {
      id: 36,
      img: Img35,
      title: "Samsung s5 ",
      price: "12200",
      aosDelay: "600",
    },
 
    {
      id: 37,
      img: Img36,
      title: "Boat Watch",
      price: "1200",
      aosDelay: "0",
    },
    {
      id: 38,
      img: Img37,
      title: "Rocky W34",
      price: "4200",
      aosDelay: "200",
    },
    {
      id: 39,
      img: Img38,
      title: "Gag W23",
      price: "3200",
      aosDelay: "400",
    },
    {
      id: 40,
      img: Img39,
      title: "HR VR ",
      price: "22000",
      aosDelay: "600",
    },

    {
      id: 41,
      img: Img40,
      title: "Boat VR",
      price: "12000",
      aosDelay: "0",
    },
    {
      id: 42,
      img: Img41,
      title: "Rocky VR4",
      price: "42000",
      aosDelay: "200",
    },
    {
      id: 43,
      img: Img42,
      title: "GAG VR7",
      price: "32000",
      aosDelay: "400",
    },
    {
      id: 44,
      img: Img43,
      title: "PAPYR 35 ",
      price: "22000",
      aosDelay: "600",
    },
  ];




const Shop = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={Products} />
        
      
      </div>
    </div>
  );
};

export default Shop;