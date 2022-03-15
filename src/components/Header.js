import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//style
import './Header.css'
export default function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={require('../shared/logo192.png')}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}      
      </Navbar.Brand>
      <Nav className="me-auto">
      <NavLink to='/'><i className='fa fa-users'></i> Nhân viên</NavLink>
      <NavLink to='/department'><i className='fa fa-building'></i> Phòng ban</NavLink>
      <NavLink to='/salary'><i className="fa fa-money"></i> Bảng lương</NavLink>
      </Nav>
      </Container>
  </Navbar>
  )
}
