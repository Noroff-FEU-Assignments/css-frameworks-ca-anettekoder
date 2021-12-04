import React from "react";
import styled from "styled-components";
import { Card, CardGroup } from "react-bootstrap";
import News1 from "../News/news/news-1.jpg";
import News2 from "../News/news/news-2.jpg";
import News3 from "../News/news/news-3.jpg";
import News4 from "../News/news/news-4.jpg";
import Title from "../props"

const CardStyles = styled.div`
  .col-sm {
    width: 264px;
    height: 394px;
    margin: 20px;
    padding: 0;
    background: white !important;
    border: none;
    box-shadow: 5px 10px 20px 1px rgb(0, 0, 0, 0.153) !important;

    &:hover {
      box-shadow: 5px 10px 20px 1px rgb(0, 0, 0, 0.253) !important;
    }
  }

  .card-img-top {
    height: 50%;
    object-fit: cover;
  }

  .card-body {
    padding: 30px;
  }

  .btn {
    background-color: #e92569 !important;
    width: 80%;
    border: none;
  }
  .d-grid {
    background-color: #767676 !important;
    width: 200px;
  }
`;

export const Cards = () => (
  <CardStyles>
    <CardGroup class="row my-3">
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News1} alt="Old TV" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News2} alt="Antique camera" />
            <Card.Body>
              <Title />
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News3} alt="Old tv" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News4} alt="Old camera" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News1} alt="Old TV" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News2} alt="Antique camera" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News3} alt="Old tv" />
            <Card.Body>
              <Card.Title>
                <h2>Card Title</h2>
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
          <div class="col-sm " style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News4} alt="Old camera" />
            <Card.Body>
              <Card.Title>
                <Title />
              </Card.Title>
              <Card.Text>
                <p>Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto rounded-1">
                <button class="btn btn-primary" type="button">
                  More
                </button>
              </div>
            </Card.Body>
          </div>
     
         
        </div>
      </div>
    </CardGroup>
  </CardStyles>
);
