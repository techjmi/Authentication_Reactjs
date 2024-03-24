import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
const Header = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Registration</Nav.Link>
            <Nav.Link href="">Feautures</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
