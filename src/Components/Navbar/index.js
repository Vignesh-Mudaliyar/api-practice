import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function NavBar({title}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
