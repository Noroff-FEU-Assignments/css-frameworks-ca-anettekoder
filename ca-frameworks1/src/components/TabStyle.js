import React from "react";
import { Tabs, Tab, Row, Col, Image, Accordion } from "react-bootstrap";
import TabImage1 from "../assets/images/tab/tab-1.jpg";
import TabImage2 from "../assets/images/tab/tab-2.jpg";
import TabImage3 from "../assets/images/tab/tab-3.jpg";
import styled from "styled-components";


const TabStyles = styled.div`
  .tab-content {
    background: white;
    min-height: 150px;
    padding: 1em;
    margin-top: -23px;
    border-radius: 12px 12px 12px 12px;
    box-shaddow: 0 6px 12px rgba(0, 0, 0, 0.05);
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #e92569 !important;
    background-color: white;
    border-radius: 12px 12px 0 0;
    border-color: white;
  }
  .imageTab {
    width: 238px;
    height: 149px;
  }

  .fab fa-twitter {
    font-size: 50px !important;
  }

  span {
    padding-right: 15px !important;
    color: #0a0a0a;
    font-size: 16px;
  }

  id="uncontrolled-tab-example" .mb-3 {
    background-color: red !important;
  }
`;

export const TabContainer = () => (
  <TabStyles>
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <div class="tab-content">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image class="imageTab" src={TabImage1} thumbnail />

            <Col>
              <span>SHARE</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <div class="tab-content">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image class="imageTab" src={TabImage2} thumbnail />

            <Col>
              <span>SHARE</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <div class="tab-content">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image class="imageTab" src={TabImage3} thumbnail />

            <Col>
              <span>SHARE</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </Col>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className="d-none d-md-block">
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="first" title="First">
        <Row>
          <Col xs={6} md={4}>
            <Image class="imageTab" src={TabImage1} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <div class="tab-content">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <Col>
                <span>SHARE</span>
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </Col>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="second" title="Second">
        <Row>
          <Col xs={6} md={4}>
            <Image class="imageTab" src={TabImage2} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <div>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <Col>
                <span>SHARE</span>
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </Col>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="third" title="Third">
        <Row>
          <Col xs={6} md={4}>
            <Image class="imageTab" src={TabImage3} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <div>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <Row class="icon text-left">
                <Col>
                  <span>SHARE</span>
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Tab>
    </Tabs>
    </div>
  </TabStyles>
);
