import React from "react";

// stateless Functional component
const NavBar = ({ totalCounters, visits }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bg-pill bg-secondary m-2">
            {totalCounters}
          </span>
        </a>
        <a className="navbar-brand" href="#">
          Number of visits
          <span className="badge bg-pill bg-secondary m-2">{visits}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
