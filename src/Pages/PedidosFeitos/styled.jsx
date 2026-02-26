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
        justify-content: ${({ $isLoggedIn }) => ($isLoggedIn ? "left" : "center")};
        
        gap: 50px;
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};
        /* border: 2px solid red; */
    }
`;

export const AcoesUsuario = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    
    height: 100%;
    width: 100%;
    overflow: auto;
    /* border: 2px solid red; */
    
    h2{
        font-size: 30px;
        color: ${colors.SegundaCorClara};
        text-align: center;
        margin-bottom: 20px;
    }
    `;

export const ContainerPedidos = styled.div`
    width: 90%;
    overflow: auto;

    /* border: 2px solid blue; */
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    
    height: auto;
    width: 100%;
    /* border: 2px solid red; */
    
    div.textoProduto{
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        justify-content: space-between;
        
        gap: 0px;
        height: 100%;
        width: 100%;
        padding: 5px 0px;
        border-top: 2px solid ${colors.PrimeiraCorClara};
        border-bottom: 2px solid ${colors.PrimeiraCorClara};
    }
    
    div.textoProduto div{
        height: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        justify-content: center;
;
    }

    div.textoProduto h2{
        /* display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden; */

        font-size: 30px;
        color: ${colors.PrimeiraCorEscura};
        text-align: left;
        font-weight: 500;
        width: 100%;
    }

    div.textoProduto div p{
        font-size: 18px;
        text-align: left;
        font-weight: 500;
        color: ${colors.SegundaCorEscura};
        margin-bottom: 5px;
    }
    
    div.textoProduto div p span{
        font-size: 18px;
        color: ${colors.CorCinzaEscuro};
    }
    
    div.textoProduto div p.preco{
        font-size: 20px;
        font-weight: 500;
        color: ${colors.CorVerde};
        text-align: right;

        width: 100%;
        padding: 10px 15px;
        background-color: ${colors.CorCinza};
        margin-bottom: 0px;
        border-radius: 5px;
    }
`;

export const ParagrafoSemProduto = styled.p`
    font-size: 30px;
    color: ${colors.CorError};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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