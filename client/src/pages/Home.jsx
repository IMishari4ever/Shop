import React from "react";
import Promotion from "../components/Promotion";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProducts from "../components/PopularProducts";
import Carousel from "../components/Carousel";
import { useLocation } from "react-router";
import Intro from './../components/Intro';
import './App.css'
const Home = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <Promotion />
      <Navbar />
      <div className="App">
     <Intro />
      </div>
      <Categories />
      <PopularProducts path={path} description="الخدمات الأكثر طلبًا" />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
