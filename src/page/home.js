import React, { Component } from "react";
// import img3 from "../img/ring-wedding.jpg";
import img4 from "../img/ring-gold.jpg";
import img5 from "../img/model1.jpg";
import img6 from "../img/model2.jpg";
import img7 from "../img/model3.jpg";
import img8 from "../img/model4.jpg";
import img9 from "../img/model5.jpg";
import img10 from "../img/model7.jpg";
import img11 from "../img/model8.jpg";
import img12 from "../img/model9.jpg";
import img13 from "../img/model10.jpg";
import img14 from "../img/model11.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid p-5">
          <h3 class="text-primary fw-bolder mb-5">SHOP BY JEWERLY TYPE</h3>
          <div class="row align-items-center text-center">
            <div class="col">
              <img src={img9} class="img-fluid d-block mx-auto w-100" alt="model6" />
              <p class="p-3">EARRING</p>
            </div>
            <div class="col">
              <img src={img8} class="img-fluid d-block mx-auto" alt="model2" />
              <p class="p-3">NECKLACES</p>
            </div>
            <div class="col">
              <img src={img5} class="img-fluid d-block mx-auto" alt="model1" />
              <p class="p-3">BRACELETS</p>
            </div>
            <div class="col">
              <img src={img6} class="img-fluid d-block mx-auto" alt="model3" />
              <p class="p-3">ALL RING</p>
            </div>
            <div class="col">
              <img src={img7} class="img-fluid d-block mx-auto" alt="model4" />
              <p class="p-3">ENGAGEMENT RING</p>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-6 p-5 bg-primary text-light">
              <h2>HAND CRAFTED FINE PIECES</h2>
              <h5>we also firmly believed that our customers deserved more choices, straightforward information and legendary service</h5>
              <button type="button" class="btn btn-light">
                LEAN MORE
              </button>
            </div>
            <div class="col-6">
              <img src={img4} class="img-fluid d-block mx-auto" alt="ring-wedding" width={"200%"} />
            </div>
          </div>
        </div>
        <div class="container-fluid p-5">
          <h3 class="text-primary fw-bolder mb-5">OUR LATES JEWERLY</h3>
          <div class="row align-items-center text-center mb-5">
            <div class="col">
              <img src={img10} class="img-fluid d-block mx-auto w-100" alt="model7" />
            </div>
            <div class="col">
              <img src={img11} class="img-fluid d-block mx-auto" alt="model8" />
            </div>
            <div class="col">
              <img src={img12} class="img-fluid d-block mx-auto" alt="model9" />
            </div>
          </div>
          <div class="d-grid gap-2 col-1 mx-auto">
            <button class="btn btn-primary" type="button">
              VIEW GALLERY
            </button>
          </div>
        </div>
        <div class="container-fluid p-5">
          <h3 class="text-primary fw-bolder mb-5">CUSTOMER REVIEW</h3>
          <div class="row align-items-center text-left mb-5">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-quote text-left"></i>
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-quote"></i>
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-quote"></i>
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-quote"></i>
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid p-5">
          <h3 class="text-primary fw-bolder mb-5">OUR SERVICES</h3>
          <div class="row align-items-center text-center mb-5">
            <div class="col">
              <img src={img13} class="img-fluid d-block mx-auto w-100" alt="ring-wedding" />
            </div>
            <div class="col">
              <img src={img14} class="img-fluid d-block mx-auto" alt="model1" />
            </div>
            <div class="col">
              <img src={img9} class="img-fluid d-block mx-auto" alt="model5" />
            </div>
          </div>
          <div class="d-grid gap-2 col-1 mx-auto">
            <button class="btn btn-primary" type="button">
              LEAN MORE
            </button>
          </div>
        </div>
        <div class="container-fluid bg-info pt-5">
          <div class="container ">
            <div class="row justify-content-center shadow">
              <div class="col-6 ">
                <img src={img4} class="img-fluid d-block mx-auto" alt="ring-wedding" />
              </div>
              <div class="col-6 pt-5 bg-light text-primary text-center">
                <h2>HAND CRAFTED FINE PIECES</h2>
                <h5 class="text-dark">we also firmly believed that our customers deserved more choices, straightforward information and legendary service</h5>
                <button type="button" class="btn btn-primary">
                  LEAN MORE
                </button>
              </div>
            </div>
          </div>
          <div class="row justify-content-start p-5">
            <div class="col-2">
              <h4>Product</h4>
              <p>Privacy Policy</p>
              <p>Term of Servive</p>
              <p>FAQ</p>
            </div>
            <div class="col-2">
              <h4>Resume</h4>
              <p>Documentation</p>
              <p>Case Studies</p>
            </div>
            <div class="col-2">
              <h4>Company</h4>
              <ul class="list-unstyled list-inline">
                <li class="list-item">hallo</li>
                <li class="list-item">hallo</li>
                <li class="list-item">hallo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
