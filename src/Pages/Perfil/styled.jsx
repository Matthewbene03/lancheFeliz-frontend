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
        justify-content: ${({ $isLoggedIn }) => ($isLoggedIn ? "left": "center")};
        
        gap: 50px;
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};
    }
`;

export const AcoesUsuario = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    height: auto;
    width: 100%;
    /* border: 2px solid red; */

    h2{
        font-size: 30px;
        color: ${colors.SegundaCorClara};
        text-align: center;
        margin-bottom: 15px;
    }
    
    div.editarDados, div.sairConta{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        
        font-size: 30px;
        font-family: "Roboto", sans-serif;
        color: ${colors.CorCinza};
        text-align: center;
        
        height: auto;
        width: 90%;
        padding: 25px 0px;
        padding-left: 15px;
        border-top: 2px solid ${colors.CorCinza};
        cursor: pointer;
    }
    
    div.editarDados div, div.sairConta div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

`;

export const CabecalhoSemLogin = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    width: 100%;

    div.naoLogado{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;

        font-size: 30px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        color: ${colors.SegundaCorEscura};
        text-align: center;

        margin-bottom: 20px;
    }
`;

export const Cabecalho = styled.div`    
    width: 100%;
    padding: 10px 0px;
    background-color: ${colors.CorCinzaClaro};
    border-bottom: 2px solid ${colors.CorCinza};
    
    h1{
        font-size: 35px;
        font-weight: bold;
        color: ${colors.SegundaCorEscura};
        text-align: center;
    }
    
    div.emailUsuario{
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        color: ${colors.SegundaCorEscura};
        text-align: center;
    }

    span{
        color: ${colors.SegundaCorClara};
    }
`;

export const LinkLogin = styled(Link)`
    background-color: ${colors.PrimeiraCorClara};
    color: ${colors.CorBranca};
    border-radius: 10px;
    padding: 10px 25px;
`;