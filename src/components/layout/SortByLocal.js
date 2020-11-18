import React from "react";
import { Row, Col, NavDropdown, Navbar, Nav } from "react-bootstrap";
import "../styles/sort-by.css";
import "../styles/searchBar.css";

const SortByLocal = (props) => {
  return (
    <Navbar className="search-bar sort-by" expand="lg" bg="">
      <h2 className="page-title">
        <strong>LOCAL NEWS{props.pageTitle}</strong>
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
        title="SAN JOSE, CA"
        id="collasible-nav-dropdown"
        className="sort-by"
        bg=""
        size='lg'
        variant="light"
      >
        <NavDropdown.Item href="#action/3.1">
          SAN JOSE, CA <span className="remove">Remove</span>
          {props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          LOS ANGLELES, CA <span className="remove">Remove</span>
          {props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          NEW YORK,NY <span className="remove">Remove</span>
          {props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          PORTLAND,OR <span className="remove">Remove</span>
          {props.sort}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          SAN FRANCISCO, CA <span className="remove">Remove</span>
          {props.sort}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          <span>ADD NEW LOCATION +</span>
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default SortByLocal;
