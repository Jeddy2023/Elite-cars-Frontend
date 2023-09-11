import React from 'react'
import '../styles/Cars.css'
import { Link } from 'react-router-dom'

function Cars() {
  return (
    <div className="container">
    {/* <Navbar /> */}
    <div className="c-top">
      <div className="c-top-left">
        <h1>
          Compare Rental Car <span id="too1">Sizes and Classes</span>
        </h1>
      </div>
      <div className="c-top-right"></div>
    </div>
    <div className="line"></div>

    {/* <cars1> */}
    <div className="c-cars1">
      <div className="c-cars1-top">
        <span>Cars</span>
        <div className="people">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-5 </p>
        </div>
        <div className="people">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-4</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Choose from a variety of rental cars in this category including
            economy, full-size or luxury sedans. Whether you are looking for
            fuel-efficiency, space, or comfort and style you are sure to find
            the perfect rental car no matter whether you are going on a quick
            family visit or an adventurous road trip.
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img1"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png"
          ></img>
        </div>
      </div>
      <button id="card1b">view All 20 Car Classes</button>
      <div className="line"></div>
    </div>

    {/* cars2 */}

    <div className="c-cars2">
      <div className="c-cars2-top">
        <span>SUVs</span>
        <div className="people2">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-7 </p>
        </div>
        <div className="people2">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-5</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Our SUVs offer plenty of flexibility with seating capacity, power,
            and luggage room. Whether you are going on a weekend family trip
            or exploring the countryside we are sure to have the ideal SUV for
            your needs..
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img2"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/suvs/CHEVROLET_TAHOE_2016.png"
          ></img>
        </div>
      </div>
      <Link to={"/suv"}>
        <button id="card2b">view All 12 SUV Classes</button>
      </Link>
      <div className="line"></div>
    </div>

    {/* cars3 */}

    <div className="c-cars2">
      <div className="c-cars1-top">
        <span>Trucks</span>
        <div className="people">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-7 </p>
        </div>
        <div className="people">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-5</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Our SUVs offer plenty of flexibility with seating capacity, power,
            and luggage room. Whether you are going on a weekend family trip
            or exploring the countryside we are sure to have the ideal SUV for
            your needs..
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img3"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/trucks/FORD_F150_2018.png"
          ></img>
        </div>
      </div>
      <button id="card3b">view All 12 SUV Classes</button>
      <div className="line"></div>
    </div>

    {/* cars4 */}

    <div className="c-cars2">
      <div className="c-cars1-top">
        <span>Vans</span>
        <div className="people">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-7 </p>
        </div>
        <div className="people">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-5</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Our SUVs offer plenty of flexibility with seating capacity, power,
            and luggage room. Whether you are going on a weekend family trip
            or exploring the countryside we are sure to have the ideal SUV for
            your needs..
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img4"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/vans/NISSAN_NV200.png"
          ></img>
        </div>
      </div>
      <button id="card4b">view All 12 SUV Classes</button>
      <div className="line"></div>
    </div>

    {/* cars5 */}

    <div className="c-cars5">
      <div className="c-cars5-top">
        <span>Luxury Cars</span>
        <div className="people5">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-7 </p>
        </div>
        <div className="people5">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-5</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Our SUVs offer plenty of flexibility with seating capacity, power,
            and luggage room. Whether you are going on a weekend family trip
            or exploring the countryside we are sure to have the ideal SUV for
            your needs..
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img5"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/cars/2019-cadillac-cts-luxury-sedan-angular-front.png"
          ></img>
        </div>
      </div>
      <button id="card5b">view All 12 SUV Classes</button>
      <div className="line"></div>
    </div>

    {/* cars6 */}

    <div className="c-cars6">
      <div className="c-cars6-top">
        <span>AWD & 4x4 Cars</span>
        <div className="people6">
          <i id="peo" class="fa-solid fa-person"></i>
          <p>4-7 </p>
        </div>
        <div className="people6">
          <i id="peo" class="fa-solid fa-bag-shopping"></i>
          <p id="num">2-5</p>
        </div>
      </div>
      <div className="c-car1-body">
        <div className="c-car1-body-left">
          <p>
            Our SUVs offer plenty of flexibility with seating capacity, power,
            and luggage room. Whether you are going on a weekend family trip
            or exploring the countryside we are sure to have the ideal SUV for
            your needs..
          </p>
        </div>

        <div className="c-car1-body-right">
          <img
            id="img6"
            src="https://www.enterprise.com/content/dam/global-vehicle-images/suvs/JEEP_WRAN_2013.png"
          ></img>
        </div>
      </div>
      <button id="card6b">view All 12 SUV Classes</button>
      <div className="line"></div>
    </div>
  </div>
  )
}

export default Cars