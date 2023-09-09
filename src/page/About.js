import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import { Valuereasons, callbox } from "../data/Aboutus";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <Navbar />
      <section className="about-section">
        <h1>
          Abo<span>ut Us</span>
        </h1>
      </section>
      <section className="value-section">
        <div className="valueh1">
          <h1>We Value Our Clients And Want</h1>
          <h1>Them To Have A Nice Experience</h1>
        </div>
        <h3>FINEST TRANSPORT</h3>
        <div className="value-section-line"></div>
        <div className="valuereasons">
          <div className="valuereasonsgrid">
            {Valuereasons.map((value) => (
              <div className="vrboxs">
                <p>{value.title}</p>
                <span>{value.reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="care-section">
        <div className="left-content"></div>
        <div className="right-content">
          <div className="contents">
            <div className="careh1">
              <h1>We Care About Your</h1>
              <h1>Comfort And Safety</h1>
            </div>
            <h3>BEST DRIVERS</h3>
            <span>
              Turpis tincidunt id aliquet risus feugiat in ante metus dictum.
              Netus et sed malesuada fames ac turpis. Netus et sed males ada
              fames ac turpis egesta doi tempus urna. Amet nulla facilisi morbi
              temp do.
            </span>
            <Link to="/cars">
              <button>RENT NOW <i class="bx bx-down-arrow-alt"></i></button>
            </Link>
          </div>
        </div>
      </section>
      <section className="call-section">
        <h4>
          <i class="bx bxs-car"></i> CALL TO ACTION
        </h4>
        <div className="callh1">
          <h1>Find Us in Multiple Locations</h1>
          <h1>for Easy Access</h1>
        </div>
        <div className="callh3">
          <h3>
            Fermentum luctus convallis non lectus. Aliquam at ut viverra non
            arcu massa laoreet
          </h3>
          <h3>commodo ac. Ut dui vel eu lacus. Turpis lectus leo sed mi.</h3>
        </div>
        <div className="callgrid">
          {callbox.map((box) => (
            <div
              className="callbox"
              style={{ backgroundImage: `url(${box.img})` }}
            >
              <span>
                {box.location}
                <h5>
                  <i class="bx bx-map"></i> 10 Location
                </h5>
              </span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;
