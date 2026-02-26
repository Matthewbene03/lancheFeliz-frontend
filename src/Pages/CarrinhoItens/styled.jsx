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
        
        gap: 30px;
        padding: 5px 0px;
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};
        /* border: 2px solid red; */
    }
    `;

export const Title1 = styled.h1`
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 35px;
    color: ${colors.SegundaCorEscura};
    /* border: 2px solid red; */
    width: 80%;
    `;

export const Container = styled.div`
    padding: 0px 10px;
    height: 100%;
    width: 100%;
    overflow: auto;
    /* border: 2px solid red; */
`;

export const Card = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    height: 185px;
    width: 100%;

    div.textoProduto{
        flex: 80%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        gap: 10px;
        padding-left: 10px;
        border-top: 2px solid ${colors.PrimeiraCorClara};
        /* border: 2px solid red; */
    }
    
    div.textoProduto h2{
        font-size: 25px;
        color: ${colors.PrimeiraCorEscura};
        text-align: left;
        font-weight: 500;
    }

    div.textoProduto div p{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        font-size: 15px;
        text-align: left;
        font-weight: 500;
        color: ${colors.CorCinza};
        margin-bottom: 5px;
    }
    
    div.textoProduto div p.preco{
        color: ${colors.CorVerde};
    }

    div.imagemProduto{
        flex: 20%;

        display: flex;
        align-items: center;
        justify-content: center;

        /* border: 2px solid red; */
        border-top: 2px solid ${colors.PrimeiraCorClara};
    }

    div.imagemProduto img{
        height: 80%;
        width: 80%;
        border-radius: 15px;
    }
`;

export const ContainerItens = styled.div`
    width: 90%;
    padding: 10px 0px;
    border-top: 1px solid ${colors.CorCinza};

    form{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-evenly;
        
        width: 100%;
    }
    
    form div.btnAdd button#btnSalvarPedido{
        font-size: 15px;
        font-weight: bold;
        color: ${colors.PrimeiraCorEscura};
        background-color: ${colors.PrimeiraCorClara};
        border: none;
        border-radius: 10px;

        padding: 10px 25px;
        cursor: pointer;
    }

    form div.btnExcluir button#btnExcluirPedido{
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
        font-weight: bold;
        color: ${colors.PrimeiraCorEscura};
        background-color: ${colors.CorError};
        border: none;
        border-radius: 10px;

        padding: 10px 25px;
        cursor: pointer;
    }
`;

export const Form = styled.form`

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

export const ButtonConfirmarPedido = styled.button`
    border: none;
    background-color: ${colors.PrimeiraCorClara};
    border-radius: 10px;
    padding: 10px 30px;
    
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: ${colors.CorBranca};
    text-align: center;
    cursor: pointer;
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