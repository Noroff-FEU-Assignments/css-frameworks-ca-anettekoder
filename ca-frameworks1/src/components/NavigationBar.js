import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,

} from "react-bootstrap";
import styled from "styled-components";

/* Styling to NavigationBar */
const NavStyles = styled.div`
  .navbar {
    background-color: #efefef !important;
    padding: 20px 70px;
  }

  .navbar-nav .nav-link:hover {
    background-color: white;
  }
  .navbar .navbar-brand {
    color: #e92569 !important;
    font-family: "Playfair Display", serif;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }

  .btn {
    border: none !important;

  }
`;

/* Code for NavigationBar */
export const NavigationBar = () => (
  <NavStyles>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">We do YAY things</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto ">
            <Nav.Link href="./">
              Home
            </Nav.Link>
            <Nav.Link href="./News">News</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              type="button"
              class="btn btn-primary"
              style={{ color: "white", background: "#E92569" }}
            >
              Go
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </NavStyles>
);
