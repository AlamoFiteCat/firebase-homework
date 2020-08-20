import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/awwbomb">
              Aww!
            </a>
          </li>
        </ul>
      </div>
      <Link to={"/create"}>
        <button className="btn btn-primary btn-lg mt-4 btn-style-add">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </Link>
    </nav>
  );
};

export default HeaderComponent;
