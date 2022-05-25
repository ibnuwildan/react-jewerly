import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="bg-info border-top border-secondary pt-3">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-6 col-sm-6 text-dark ps-5 fw-bolder">
              <p>@ Blue Diamond Jewerly 2022</p>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 ">
              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item pe-5">
                    <i class="bi bi-facebook"></i>
                  </li>
                  <li class="list-inline-item pe-5">
                    <i class="bi bi-instagram"></i>
                  </li>
                  <li class="list-inline-item pe-5">
                    <i class="bi bi-facebook"></i>
                  </li>
                  <li class="list-inline-item pe-5">
                    <i class="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
