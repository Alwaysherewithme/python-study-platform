import React from "react";
import { Container, Row, Col } from "shards-react";

const Signin = ({ children }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-5"
        lg={{ size: 6, offset: 3 }}
        md={{ size: 6, offset: 3 }}
        sm="12"
        tag="main"
      >
        {children}
      </Col>
    </Row>
  </Container>
);

Signin.propTypes = {
};

Signin.defaultProps = {
};

export default Signin;
