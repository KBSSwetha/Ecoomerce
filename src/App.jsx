import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Accessories from "./components/Accessories/Accessories.jsx";
import Laptop from "./components/Laptop/Laptop.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Cart from "./components/Cart/Cart.jsx";

import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

import Products1 from "./components/Products/Products1.jsx";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Shared/Button.jsx";

import { useState,useEffect } from "react";

import Heading from "./components/Shared/Heading.jsx";
import ProductCard from "./components/Products/ProductCard.jsx";


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
   
  


      <Navbar handleOrderPopup={handleOrderPopup}/>
     
      <Router>
        <Routes>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/products" element={<Products1 />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/mobiles" element={<Mobiles />}></Route>
          <Route path="/laptop" element={<Laptop />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route> 
          <Route exact path="/" element={<Button />}></Route> 
          <Route path="/category" element={<Category />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
      </Router>
      
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products1 />
      <Banner data={BannerData2} />
      <Blogs />
     
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />



 
    </div>
  );
};

export default App;