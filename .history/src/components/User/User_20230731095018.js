import React from "react";
import "./User.css"; // Import your CSS file for styling

const User = (props) => {
  return (
    <div>
      <header>
        <div className="mobile-menu bg-second">
          <a href="#" className="mb-logo">
            ATShop
          </a>
          <span className="mb-menu-toggle" id="mb-menu-toggle">
            <i className="bx bx-menu"></i>
          </span>
        </div>
        {/* end mobile menu */}
        {/* main header */}
        <div className="header-wrapper" id="header-wrapper">
          <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
            <i className="bx bx-x"></i>
          </span>
          {/* top header */}
          <div className="bg-second">
            <div className="top-header container">
              <ul className="devided">
                <li>
                  <a href="#">+840123456789</a>
                </li>
                <li>
                  <a href="#">atshop@mail.com</a>
                </li>
              </ul>
              <ul className="devided">
                <li className="dropdown">
                  <a href="">USD</a>
                  <i className="bx bxs-chevron-down"></i>
                  <ul className="dropdown-content">
                    <li>
                      <a href="#">VND</a>
                    </li>
                    <li>
                      <a href="#">JPY</a>
                    </li>
                    <li>
                      <a href="#">EUR</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="">ENGLISH</a>
                  <i className="bx bxs-chevron-down"></i>
                  <ul className="dropdown-content">
                    <li>
                      <a href="#">VIETNAMESE</a>
                    </li>
                    <li>
                      <a href="#">JAPANESE</a>
                    </li>
                    <li>
                      <a href="#">FRENCH</a>
                    </li>
                    <li>
                      <a href="#">SPANISH</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">ORDER TRACKING</a>
                </li>
              </ul>
            </div>
          </div>
          {/* end top header */}
          {/* mid header */}
          <div className="bg-main">
            <div className="mid-header container">
              <a href="#" className="logo">
                ATShop
              </a>
              <div className="search">
                <input type="text" placeholder="Search" />
                <i className="bx bx-search-alt"></i>
              </div>
              <ul className="user-menu">
                <li>
                  <a href="#">
                    <i className="bx bx-bell"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-user-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-cart"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end mid header */}
          {/* bottom header */}
          <div className="bg-second">
            <div className="bottom-header container">
              <ul className="main-menu">
                <li>
                  <a href="#">home</a>
                </li>
                {/* ... */}
              </ul>
            </div>
          </div>
          {/* end bottom header */}
        </div>
        {/* end main header */}
      </header>
      {/* ... */}
      {/* end product-detail content */}
      <div className="bg-main">{/* ... */}</div>
      {/* end product-detail content */}
      {/* footer */}
      <footer className="bg-second">
        <div className="container">
          <div className="row">
            <div className="col-3 col-md-6">
              <h3 className="footer-head">Products</h3>
              <ul className="menu">
                <li>
                  <a href="#">Help center</a>
                </li>
                {/* ... */}
              </ul>
            </div>
            {/* ... */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default User;
