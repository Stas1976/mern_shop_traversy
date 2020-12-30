import PropTypes from "prop-types";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { PRODUCT } from "../routes/routes";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product">
      <Link to={`${PRODUCT}/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`${PRODUCT}/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="red"
          />
        </Card.Text>
        <Card.Text as="h3">Kaina: {product.price}&euro; </Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
