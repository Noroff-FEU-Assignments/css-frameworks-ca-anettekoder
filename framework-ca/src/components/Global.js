import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    background: radial-gradient(circle at center, #FFFFFF, #E5E5E5) !important;
    height: 100%
    display: flex;
    flex-direction: column;
}

h1 {
    font-family: 'Playfair Display', serif;
    color: #E92569;
    font-size: 36px !important;
     
    padding-top: 50px;
    padding-bottom: 20px;
    
  }

  h2 {
      font-family: 'Lato', sans-serif;
      font-size: 20px;
      font-weight: 500;
      color: #0A0A0A;
  }

p {
   font-family: 'Lato', sans-serif;
    color: #767676;
}


`;

export default GlobalStyles
