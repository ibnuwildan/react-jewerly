import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Carousel from "./component/carousel";
import About from "./page/about";
import Contact from "./page/contact";
import Home from "./page/home";
import Service from "./page/service";
import Shop from "./page/shop";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
