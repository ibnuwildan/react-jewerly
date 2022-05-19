import React, { Component } from "react";
import img1 from "../img/ring.jpg";
import img2 from "../img/earring.jpg";

class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="carousel1" />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="carousel2" />
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="carousel1" />
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
