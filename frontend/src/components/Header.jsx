import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/userAction";
import { CART, HOME, LOG_IN, PROFILE } from "../routes/routes";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandeler = () => {
    dispatch(logout());
  };
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
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="userName">
                  <LinkContainer to={PROFILE}>
                    <NavDropdown.Item>Paskyra</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandeler}>
                    Atsijungti
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to={LOG_IN}>
                  <Nav.Link>
                    <i className="fas fa-user mr-2"></i>Prisijungti
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
