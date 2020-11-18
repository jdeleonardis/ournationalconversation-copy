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
          NEWEST ADDTIONS{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          RATING: HIGH TO LOW{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          RATING: LOW TO HIGH{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          PRICE: HIGH TO LOW{props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          PRICE: LOW TO HIGH{props.sort}
        </NavDropdown.Item>

      </NavDropdown>
    </Navbar>
  );
};

export default SortBy;
