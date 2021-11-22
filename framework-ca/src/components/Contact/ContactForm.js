import React from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  Stack,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styled from "styled-components";

const ContactFormStyle = styled.div`
  h1 {
    padding-bottom: 20px;
  }

  .btn-primary {
    background-color: #767676;
    border-color: #767676;
    width: 100%;
  }

  btn-bg {
    width: 30px;
    height: 30px;
    background-color: #e92569;
    border-color: #e92569;
    margin: 0 20px;
  }
`;
export const ContactForm = () => (
  <ContactFormStyle>
    <Container>
      <Container>
        <Row >
          <Col md={12} text-center>
            <h1>Submit your details</h1>
          </Col>
          <Col md={6} order-md-1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Label htmlFor="basic-url">Website</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">@</InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
              <Form.Label htmlFor="basic-url">Message</Form.Label>
              <Form.Control as="textarea" rows="6" />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Allow us to sell your personal details to whomever we want"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} order-md-0>
            <Stack gap={3}>
              <div className="bg-light border">
                <p>
                  {" "}
                  <span>
                    <i class="fas fa-envelope"></i>
                    hello@yay.com
                  </span>
                </p>
              </div>
              <div className="bg-light border">
                <p>
                  <span>
                    <i class="fas fa-phone"></i>
                  </span>
                  123 456 7890
                </p>
              </div>
              <div className="bg-light border">
                <p>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  123 Some Street Somewhere Some City 10000
                </p>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  </ContactFormStyle>
);
