import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import heroimg from "../images/car-2-removebg-preview.png";
import missionimg from "../images/block-transparent-img.png";
import {
  Reviews,
  Ourreasons,
  Galleryimg,
  Cars,
  Newcars,
  selectedCar,
  selectedNewCar,
} from "../data/Homedata.js";

function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredCars = Cars.filter((car) => {
    if (activeCategory === "ALL") {
      return true;
    } else {
      return car.category === activeCategory;
    }
  });
  const filteredNewCars = Newcars.filter((car) => {
    if (activeCategory === "NEW CARS") {
      return true;
    } else {
      return car.category === activeCategory;
    }
  });

  let initialSelectedCarId = null;
  if (selectedCar.length > 0) {
    initialSelectedCarId = selectedCar[0].id;
  }

  const [selectedCarId, setSelectedCarId] = useState(initialSelectedCarId);

  const handleCarClick = (id) => {
    const gottenCar = filteredCars.find((car) => car.id === id);
    const car = selectedCar.find((car) => car.id === id);

    if (!gottenCar || !car) {
      alert("Car not found!"); 
      return; 
    }

    const joined = { ...gottenCar, ...car };
    setSelectedCarId(joined);
  };

  const handleNewCarClick = (id) => {
    const gottenCar = filteredNewCars.filter((car) => car.id === id)[0];
    const car = selectedNewCar.filter((car) => car.id === id)[0];

    const joined = { ...gottenCar, ...car };

    setSelectedCarId(joined);
  };

  return (
    <main>
      <Navbar />
      <div className="hero-section">
        <div className="left">
          <div className="left-content">
            <h3>Plan your trip now</h3>
            <div className="left-content-h1">
              <h1>Explore the world with</h1>
              <h1>comfortable cars</h1>
            </div>
            <div className="left-content-h4">
              <h4>
                Embark on unforgettable adventures and discover the world in
                unparalleled comfort and style with our fleet of exceptionally
                comfortable cars.
              </h4>
            </div>
            <div className="buttons">
              <Link to={"/contact"}>
                <button>Get in Touch</button>
              </Link>
              <Link to={"/about"}>
                <button className="btn2">About Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src={heroimg}
            alt=""
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
          />
        </div>
      </div>
      <div className="mission-section">
        <div className="whychooseus">
          <h1>
            W<span>hy choose our servi</span>ce?
          </h1>
          <div className="reason">
            <h3>
              At Elite, our expert staff offer lots of benefits and advantages
              to our clients. With us,
            </h3>
            <h3>
              you'll receive a class-leading car rental service from local
              experts.
            </h3>
          </div>
          <div className="ourreasons">
            {Ourreasons.map((reasons) => (
              <div className="ourreasons-card">
                <img src={reasons.img} alt="" />
                <h2>{reasons.name}</h2>
                <div className="h3-reasons">
                  <h3>{reasons.review}</h3>
                  <h3>{reasons.review2}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gallery-section">
        <div className="gallery-section-boxes">
          {Galleryimg.map((gallery) => (
            <div className="gallery-section-box">
              <img src={gallery.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="top-cars">
        <div className="top-cars-left">
          <div className="switches">
            <Link to="#" onClick={() => setActiveCategory("ALL")}>
              TOP POPULAR
            </Link>
            <div className="switches-line"></div>
            <Link to="#" onClick={() => setActiveCategory("NEW CARS")}>
              NEW CARS
            </Link>
          </div>
          <div className="cars">
            {filteredCars.map((car) => (
              <li key={car.id}>
                <Link onClick={() => handleCarClick(car.id)}>
                  <img src={car.img} alt="" />
                  <div className="linktext">
                    <span className="title">{car.title}</span>
                    <span className="car-des">{car.description}</span>
                    <span className="rent-price">
                      ${car.price} <b>/Day</b>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            {filteredNewCars.map((car) => (
              <li key={car.id}>
                <Link onClick={() => handleNewCarClick(car.id)}>
                  <img src={car.img} alt="" />
                  <div className="linktext">
                    <span className="title">{car.title}</span>
                    <span className="car-des">{car.description}</span>
                    <span className="rent-price">
                      ${car.price} <b>/Day</b>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className="top-cars-right">
          <div className="tabcontent">
            <div className="tabpanel" id="car">
              {selectedCarId !== null && (
                <div className="cardetails">
                  <h3>{selectedCarId.title}</h3>
                  <div
                    className="carimage"
                    style={{ backgroundColor: selectedCarId.color }}
                  >
                    <img src={selectedCarId.img} alt="" />
                  </div>
                  <div className="car-details-option">
                    <span>2-large bags</span>
                    <span>No smoking</span>
                    <span>08/12 mpg</span>
                    <span>
                      Starting at <span>${selectedCarId.price}</span>/day
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ratings-section">
        <div className="mission-section-content">
          <div className="mission-section-left">
            <h1>Our Mission</h1>
            <h3>
              Suspendisse hendrerit facilisis ante. Sed feugiat lectus non tim
              porttitor aliquam. Ut a ipsum tempus, venenatis nibh et,
              eleifefend nisi. Etiam hendrerit, purus ac varius vestibulum, enim
              lon arcu euismod purus, id hendrerit tellus turpis biben dum
              exilon Morbi cursus justo ut malesuada tempus.
            </h3>
            <h4>
              Fortune Ken - Osuh .<span> CEO Founder</span>
            </h4>
          </div>
          <div className="mission-section-right">
            <img
              src={missionimg}
              alt=""
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="explorecard card1">
          <h1>Explore the world with comfortable cars.</h1>
        </div>
        <div className="explorecard cards2">
          <i className="bx bxs-trophy"></i>
          <h3>First Class Services</h3>
          <h4>
            Where luxury meets exceptional care, creating unforgettable moments
            and exceeding your every expectation.
          </h4>
        </div>
        <div className="explorecard cards2">
          <i className="bx bxs-car"></i>
          <h3>First Class Services</h3>
          <h4>
            Where luxury meets exceptional care, creating unforgettable moments
            and exceeding your every expectation.
          </h4>
        </div>
        <div className="explorecard cards2">
          <i className="bx bxs-map"></i>
          <h3>First Class Services</h3>
          <h4>
            Where luxury meets exceptional care, creating unforgettable moments
            and exceeding your every expectation.
          </h4>
        </div>
      </div>
      <div className="ratings-section-sub">
        {Reviews.map((reviewers) => (
          <div className="ratings-section-card">
            <div className="ratings-section-image">
              <img src={reviewers.img} alt="" />
            </div>
            <div className="ratings-section-text">
              <div className="ratesvg">
                <i className="bx bxs-quote-right"></i>
              </div>
              <h3>Excellent Service! Car Rent Service!</h3>
              <h4>{reviewers.review}</h4>
              <h4>
                <span></span>
                {reviewers.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
