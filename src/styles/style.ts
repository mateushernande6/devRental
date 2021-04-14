import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  #root {
    --text: #fff;
    --color-primary: #FC923F;
    --color-secondary: #D75358;

  }
  html{
    font-size: 62.5%;
  }

  body {
    background-image: linear-gradient(to right bottom, #212040, #21203e);
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    
    min-width: 30rem;
  }

  .MuiButton-containedPrimary {
    background-color: rgba(66, 68, 114, 0.43) !important;
  }

  .MuiTypography-body1 {
    font-size: 1.6rem !important;
  }

  .MuiSvgIcon-fontSizeSmall {
    font-size: 2.55rem !important;
  }
`;
