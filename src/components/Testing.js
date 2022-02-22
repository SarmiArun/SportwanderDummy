import React from 'react';
import { Row, Img, Col } from './CustomComponent';

export default () => (
  <>
    <Row>
      <Col xs={6}>Hello</Col>
      <Col>
        <Img height="100" width="100" />
      </Col>
    </Row>
  </>
);
