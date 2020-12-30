import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import db from "../db/products";

const Home = () => {
  return (
    <>
      <h1>Naujausi Produktai</h1>
      <Row>
        {db.map((product) => (
          <Col sm={12} md={6} lg={4} xlg={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
