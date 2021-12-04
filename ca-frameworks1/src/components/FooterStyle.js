import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const FooterStyles = styled.div`
  .footer {
    flex-shrink: 0;
    background-color: white;
    width: 100%;
    height: 63px;
    color: #767676;
    margin-top: 200px;
  }

  .navbar-nav .active > .nav-link {
    color: var(--primary-colour);
  }

  .fab {
    font-size: 30px;
    padding-right: 10px;
  }

  @media screen and (max-width: 600px) {
    .footer {
      display: flex;
      height: 165px;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StickyFooter = () => (
  <FooterStyles>
    <div class="footer text-center py-3">
      <Row>
        <Col>
          <i class="fab fa-vimeo-v"></i>
          <i class="fab fa-youtube"></i>
        </Col>
        <Col>
          <p>hello@yay.com</p>
        </Col>
        <Col>
          <p>Copyright 2021</p>
        </Col>
      </Row>
    </div>
  </FooterStyles>
);
