import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { ThemeContext } from "../modules/Context";
import SearchBook from "./SearchBook";

function MyNav({ search, handleSearch }) {
  let [themeCtx, setThemeCtx] = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg={themeCtx}
      data-bs-theme={themeCtx}
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBook search={search} handleSearch={handleSearch} />
          <Button
            variant={themeCtx === "light" ? "dark" : "light"}
            onClick={() => {
              themeCtx === "light" ? setThemeCtx("dark") : setThemeCtx("light");
            }}
          >
            {themeCtx === "light" ? "dark" : "light"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
