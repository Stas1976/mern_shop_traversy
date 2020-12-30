import { Col, ListGroup, Row, Image, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Rating from "../components/Rating";
import db from "../db/products";
import { HOME } from "../routes/routes";

const ProductPage = ({ match }) => {
  console.log(db[0]._id);
  const product = db.find((p) => p._id === match.params.id);

  console.log(match);

  return (
    <>
      <Link className="btn btn-dark my-3" to={HOME}>
        <h5>Atgal</h5>
      </Link>
      <Row>
        <Col sm={12} md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col sm={6} md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Kaina: {product.price}&euro;</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6} md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>{product.price}&euro;</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Sandėlyje: </Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <div className="text-success">Yra</div>
                    ) : (
                      <div className="text-danger">Nėra</div>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" variant="light" type="button">
                  Į krėpšelį
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(ProductPage);
