import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../config/colors"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    /* border: 2px solid red; */
    
    div.container{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;

        overflow: auto;
        
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};
    }
    `;

export const Title1 = styled.h1`
    flex: 10%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 35px;
    color: ${colors.SegundaCorEscura};

    width: 80%;
`;

export const Title2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 20px;
    color: ${colors.SegundaCorEscura};

    width: auto;
`;

export const Form = styled.form`
    flex: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    /* border: 2px solid red; */

    label{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 18px;
        width: 100%;
        
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: ${colors.SegundaCorEscura};
    }

    input{
        height: 50px;
        border: 1.5px solid ${colors.CorCinza};
        border-radius: 8px;
        padding-left: 15px;
        font-size: 18px;
    }
    
    button{
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        color: ${colors.CorCinzaClaro};
        background-color: ${colors.SegundaCorClara};

        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;


export const DivCadastro = styled.div`
    flex: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 80%;
    padding: 10px 0px;
    border-top: 1.5px solid ${colors.CorCinza};


`;

export const LinkCadastro = styled(Link)`
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: ${colors.CorCinzaClaro};
    background-color: ${colors.SegundaCorClara};
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    cursor: pointer;
`;

