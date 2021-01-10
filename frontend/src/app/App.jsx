import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";
import RegisterPage from "../pages/RegiserPage";
import UserProfilePage from "../pages/UserProfilePage";

import {
  CART,
  HOME,
  LOG_IN,
  PRODUCT,
  PROFILE,
  REGISTER,
} from "../routes/routes";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path={`${LOG_IN}`} component={UserPage} />
          <Route path={`${REGISTER}`} component={RegisterPage} />
          <Route path={`${PROFILE}`} component={UserProfilePage} />
          <Route path={`${PRODUCT}/:id`} component={ProductPage} />
          <Route path={`${CART}/:id?`} component={CartPage} />
          <Route path={HOME} exact component={Home} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
