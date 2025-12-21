import React from "react";

const Services = () => {
  return (
    <section className="services section">
      <div className="services-left">
        <span className="pill">Services</span>

        <p>
          Explore our full range of coaching, training, and tennis experiences.
          From first serve to match point — we've got the right program for you.
        </p>

        <button className="services-btn">
          Explore More <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>

      <div className="services-center service-card large">
        <span className="badge">Training Programs</span>

        <p>Programs designed for all ages and abilities.</p>

        <span className="icon-arrow">
          <i className="ri-arrow-right-up-line"></i>
        </span>
      </div>

      <div className="services-right service-card small">
        <div className="image">
          <span className="badge">Court Access</span>
        </div>

        <h3>Hourly Court Rental</h3>

        <p>
          Step into a space built for players — to grow, compete, and thrive.
        </p>

        <div className="arrows">
          <button>
            <i className="ri-arrow-left-line"></i>
          </button>
          <button>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
