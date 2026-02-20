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
        
        gap: 50px;
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 40px ${colors.PrimeiraCorEscura};

    }
`;

export const Title1 = styled.h1`
    font-size: 35px;
    color: ${colors.SegundaCorEscura};
`;

export const Categoria = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: ${colors.SegundaCorEscura};
`;

export const ContainerCard = styled.div`
    width: 90%;
    overflow: auto;
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

export const LinkProduto = styled(Link)`
    background-color: ${colors.PrimeiraCorClara};
    color: ${colors.CorBranca};
    border-radius: 10px;
    padding: 10px 25px;
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