import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";


/* Styling to Layout */
const OuterContainer = styled.div`
  body {
    background-color: red !important;
  }

  .body-size {
    margin: 0 90px !important;
  }
`;

export const Wrapper = (props) => (
  <OuterContainer>
    <Container class="body-size">{props.children}</Container>;
  </OuterContainer>
);
