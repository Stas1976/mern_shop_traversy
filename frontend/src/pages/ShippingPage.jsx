import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

import { saveShippingAddress } from "../redux/actions/cartActions";
import { PAYMENT } from "../routes/routes";

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push(PAYMENT);
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Pristatymas</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Adreasas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Įveskitė adresą"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Miestas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Miestas"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Pašto kodas</Form.Label>
          <Form.Control
            type="text"
            placeholder="pašto kodas"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Valstybės kodas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Valstybės kodas"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Testi
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingPage;
