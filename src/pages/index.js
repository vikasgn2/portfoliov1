import React from "react";

import Layout from "../components/Layout";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

import im from "../images/undraw_freelancer_re_irh4.svg";

function index() {
  return (
    <Layout>
      <div className="hero">
        <img src={im} alt="Hero" className="im" />
        <h1 className="home-h1">Hello, I'm Vikas! </h1>
        <h2 className="home-h2">Developer From Bangalore, India</h2>
      </div>
      <About />
      <Work />
      <Contact />
    </Layout>
  );
}

export default index;
