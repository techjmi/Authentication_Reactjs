
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
const navigate=useNavigate()
  const handleLogout = ()=>{
    localStorage.clear("user_login")
    navigate("/login");
}
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Registration</Nav.Link>
            <Nav.Link href="">Features</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
