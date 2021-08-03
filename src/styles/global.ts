import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  :root {
    --primary-color: #FBFCFF;
    --blue-200: #3485FF;
    --bg-container: linear-gradient(288deg, #00183E 7.52%, #286197 54.16%, #000C32 94.05%);
    --bg-card:#E0ECFF;
    --contorno: #028602;
  } 
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
    
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background: var(--primary-color);
  } 
`;
