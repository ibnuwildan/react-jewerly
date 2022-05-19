import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid p-3">
            <a class="navbar-brand text-primary fs-2 ms-5" href="/">
              BAYSIDE FINE JEWERLY
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-lg-0 pe-5">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Shop">
                    Shop
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Service">
                    Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="bi bi-bag"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
