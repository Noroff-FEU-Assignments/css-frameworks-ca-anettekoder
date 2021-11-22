import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import CarouselImage1 from "../assets/images/carousel-images/carousel-1.jpg";
import CarouselImage2 from "../assets/images/carousel-images/carousel-2.jpg";
import CarouselImage3 from "../assets/images/carousel-images/carousel-3.jpg";


/* Styling to NavigationBar */
const CarouselStyles = styled.div`
  .d-block {
    width: 100% !important;
  }

  button {
    height: 30px !important;
    background-color: white !important;

    &.active {
      background-color: #e92569 !important;
    }
  }
`;

/* Code for Carousel */
export const HomeCarousel = () => (
  <CarouselStyles>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselImage3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </CarouselStyles>
);
