import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, p{
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-style: normal;
    }
    
    a{
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        color: ${colors.SegundaCorEscura};
        cursor: pointer;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

`;