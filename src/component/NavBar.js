import React from 'react'
import {Navbar, Container, Nav, img} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
  return (
    <div>
    
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={require( "../shared/logo512.png")}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Ứng dụng quản lý nhân sự v1.0
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}
