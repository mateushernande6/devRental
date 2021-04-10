import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  #root {
    --text: "#fff";
    --color-primary: #FC923F;
    --color-secondary: #D75358;

  }
  html{
    font-size: 62.5%;
  }

  body {
    background-image: linear-gradient(to right bottom, #212040, #21203e);
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;
