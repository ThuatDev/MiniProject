import React from "react";

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
          <div className="bg-second">{/* ... */}</div>
          {/* end top header */}
          {/* mid header */}
          <div className="bg-main">{/* ... */}</div>
          {/* end mid header */}
          {/* bottom header */}
          <div className="bg-second">{/* ... */}</div>
          {/* end bottom header */}
        </div>
        {/* end main header */}
      </header>
      {/* ... */}
      {/* end product-detail content */}
      <div className="bg-main">{/* ... */}</div>
      {/* end product-detail content */}
      {/* footer */}
      <footer className="bg-second">{/* ... */}</footer>
    </div>
  );
};

export default User;
