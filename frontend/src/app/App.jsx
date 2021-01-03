import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import { CART, HOME, PRODUCT } from "../routes/routes";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path={HOME} exact>
            <Home />
          </Route>
          <Route path={`${PRODUCT}/:id`}>
            <ProductPage />
          </Route>
          <Route path={`${CART}/:id?`}>
            <CartPage />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
