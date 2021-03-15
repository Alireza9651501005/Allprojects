import React from "react";
import logo from "../ball.png";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar2 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img className='logo22' src={logo} alt="logo..."/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" >
      <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features"><span className='linky'>Home</span></Nav.Link>
          <Nav.Link href="#pricing"><span className='linky'>About Me</span></Nav.Link>
          <Nav.Link href="#deets"><span className='linky'>Services</span></Nav.Link>
          <Nav.Link href="#deets"><span className='linky'>Home Work</span></Nav.Link>
          <Nav.Link href="#deets"><span className='linky'>Portfolio</span></Nav.Link>
          <Nav.Link href="#deets"><span className='linky'>contacts</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
