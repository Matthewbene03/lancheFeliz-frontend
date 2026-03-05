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
        justify-content: space-around;
        
        gap: 20px;
        height: 60vh;
        width: 50vw;
        padding-top: 20px;
        padding-bottom: 30px;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};
        /* border: 2px solid red; */
    }
    
    div.container h2{
        font-size: 30px;
        color: ${colors.SegundaCorClara};
        text-align: center;
        margin-bottom: 20px;
        /* border: 2px solid red; */
    }
`;

export const Container = styled.div`
    width: 90%;
    overflow: auto;
    padding-right: 10px;

    /* border: 2px solid blue; */
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    
    height: auto;
    width: 100%;
    border-top: 2px solid ${colors.PrimeiraCorClara};
    /* border: 2px solid red; */
    
    div.textoProduto{
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        justify-content: space-between;
        
        gap: 0px;
        height: 100%;
        width: 100%;
        padding: 10px 0px;
        /* border: 2px solid red; */
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

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

    div.btnEditExcluir{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding-right: 10px;
        /* border: 2px solid red; */
    }
    
    div.btnEditExcluir div.btnEdit, div.btnEditExcluir div.btnExcluir{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        align-items: center;
        gap: 8px;
        
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        width: 100%;
        padding: 10px 20px;
        border-radius: 10px;
        white-space: nowrap;
    }

    div.btnEditExcluir div.btnEdit{
        background-color: ${colors.CorCinzaEscuro};
        color: ${colors.CorCinzaClaro};
    } 
    div.btnEditExcluir div.btnExcluir{
        background-color: ${colors.CorVermelhaClaro};
        color: ${colors.CorCinzaClaro};
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

export const LinkLogin = styled(Link)`
    background-color: ${colors.PrimeiraCorClara};
    color: ${colors.CorBranca};
    border-radius: 10px;
    padding: 10px 25px;
`;