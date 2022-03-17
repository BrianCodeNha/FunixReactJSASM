import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  let username, password, remember;

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogin = (event) => {
    toggleModal();
    alert(
      "Username: " +
        username.value +
        " Password: " +
        password.value +
        " Remember: " +
        remember.checked
    );
    event.preventDefault();
  };
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="ristorance Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"> About us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"> Contact us</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
        <NavItem style={{float: 'right'}}>
          <Button outline onClick={toggleModal}>
            <span className="fa fa-sign-in fa-lg"></span> Login
          </Button>
        </NavItem>
      </Nav>
          </Collapse>
        </div>
      </Navbar>
      
      <div class="jumbotron" style={{ backgroundColor: "royalblue" }}>
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1 class="display-4">Ristorante Con Fusion</h1>
            <p class="lead">
              We take responsibility sadf sdaf sdfd dfok jsoin dfla dsfio sdfj
              adflj ad asdf dsf afa dfaf a
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => (remember = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
