import { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listProductDetials } from "../redux/actions/productActions";
import { CART, HOME } from "../routes/routes";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetials(match.params.id));
  }, [dispatch, match]);

  const addToCartHendler = () => {
    history.push(`${CART}/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to={HOME}>
        <h5>Atgal</h5>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Vnt. </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (item) => (
                              <option key={item + 1} value={item + 1}>
                                {item + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHendler}
                    className="btn-block"
                    variant="light"
                    type="button"
                  >
                    Į krėpšelį
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default withRouter(ProductPage);
