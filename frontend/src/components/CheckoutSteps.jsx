import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { LOG_IN, PAYMENT, SHIPPING } from "../routes/routes";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to={LOG_IN}>
            <Nav.Link>Prisijungti</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Prisijungti</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to={SHIPPING}>
            <Nav.Link>Pristatymas</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pristatymas</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to={PAYMENT}>
            <Nav.Link>Apmokėjimas</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Apmokėjimas</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Užsakymas</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Užsakymas</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
