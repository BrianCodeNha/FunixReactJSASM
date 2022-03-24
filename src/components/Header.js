import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//style
import "./Header.css";

import SearchPage from "./SearchPage";
export default function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={require("../shared/logo192.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="me-auto" aria-controls="basic-navbar-nav" ><i className="fa fa-bars"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <i className="fa fa-users"></i> Nhân viên
            </NavLink>
            <NavLink to="/department">
              <i className="fa fa-building"></i> Phòng ban
            </NavLink>
            <NavLink to="/salary">
              <i className="fa fa-money"></i> Bảng lương
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
