import React from "react";
import banner from "../Images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* banner text */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restuarent, focused on
            traditional recipes served with modern twist.
          </p>
          <Link to="/booking">
            {" "}
            <button aria-label="on Click ">Reserve Table</button>
          </Link>
        </div>
        {/* banner image */}
        <div className="banner-img">
          <img src={banner} alt="banner-image" />
        </div>
      </section>
    </header>
  );
};

export default Header;
