import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CART, HOME, LOG_IN } from "../routes/routes";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={HOME}>
            <Navbar.Brand>Parduotuvė</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to={CART}>
                <Nav.Link>
                  <i className="fas fa-shopping-cart mr-2"></i>Krepšėlis
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={LOG_IN}>
                <Nav.Link>
                  <i className="fas fa-user mr-2"></i>Prisijungti
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
