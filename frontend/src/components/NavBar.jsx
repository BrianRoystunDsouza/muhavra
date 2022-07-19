import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import React, { useState } from "react";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="main-nav">
      {/* 1st logo part  */}
      <div className="logo">
        <h2>
          <span>M</span>uhavara
        </h2>
      </div>

      {/* 2nd menu part  */}
      <div
        className={
          showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
        }>
        <ul>
          <li>
            <NavLink to="/">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/about">GIFT & EVENTS</NavLink>
          </li>
          <li>
            <NavLink to="/service">OUR CAFES</NavLink>
          </li>
          <li>
            <NavLink to="/contact">LEARN</NavLink>
          </li>
          <li>
            <NavLink to="/contact">ABOUT US</NavLink>
          </li>
          <li>
            <button className="track">
              TRACK ORDER
            </button>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <span >
              <BsSearch />
            </span>
          </li>
          <li>
            <span>
              <AiOutlineUser />
            </span>
          </li>
          <li>
            <Link to="/cart">
            <span className="bag-quantity">
                  <span>{cartTotalQuantity}</span>
                </span>
              <div className="nav-bagg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-handbag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                

              </div>

            </Link>
          </li>
        </ul>
                {/* hamburge menu*/}
                <div className="hamburger-menu">
                  <a href="#0" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu size={40} />
                  </a>
                </div>
      </div>
    </nav>
  );
};

export default NavBar;