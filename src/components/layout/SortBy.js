import React from "react";
import { Row, Col, NavDropdown, Navbar, Nav } from "react-bootstrap";
import "../styles/sort-by.css";
import "../styles/searchBar.css";

const SortBy = (props) => {
  return (
    <Navbar className="search-bar sort-by" expand="lg" bg="">
      <h2 className="page-title">
        <strong>{props.pageTitle}</strong>
      </h2>
      <p>Newly Arrived</p>
      <div class="textdiv">
        <div className="texttitle">
          {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
        </div>
        <div className="divider"></div> &nbsp;&nbsp;&nbsp;
        {/* <span id='sort-by'>Sort by: DEFAULT</span>&nbsp;&nbsp;
        <i class='fas fa-caret-down'></i> */}
      </div>
      <NavDropdown
        title="Sort by: DEFAULT"
        id="collasible-nav-dropdown"
        className="sort-by"
        bg=""
        variant="light"
      >
        <NavDropdown.Item href="#action/3.1">
          DEFAULT{props.sort}{" "}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          NEWEST{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          OLDEST{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          MOST COMMENTS{props.sort}
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default SortBy;
