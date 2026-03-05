import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Product from "./product/Product";
import Strategy from "./strategy/Strategy";
import Contact from "./contact/Contact";

const HomeComponents = () => {
  return (
    <>
      <Hero />
      <About />
      <Strategy />
      <Product />
      <Contact />
    </>
  );
};

export default HomeComponents;
