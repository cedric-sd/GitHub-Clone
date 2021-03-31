import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <hr />
            <ul className="d-flex">
              <li>© 2021 GitHub, Inc.</li>
              <li className="ml-4">Terms</li>
              <li className="ml-4">Privacy</li>
              <li className="ml-4">Security</li>
              <li className="ml-4">Status</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
