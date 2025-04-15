import React from "react";
import "../../styles/services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1>What we do?</h1>

      <div className="services-cards">
        <div className="services-container">
          <h2>Service1</h2>
          <p>
            text... <br /> text... <br />
            text... <br />
          </p>
        </div>

        <div className="services-container">
          <h2>Service2</h2>
          <p>
            text... <br /> text... <br />
            text... <br />
          </p>
        </div>

        <div className="services-container">
          <h2>Service3</h2>
          <p>
            text... <br /> text... <br />
            text... <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
