import styled from "styled-components";
import * as colors from "../../config/colors"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    border: 2px solid red;
    
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

    p{
        text-align: center;
    }
`;

export const Card = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    height: 150px;
    width: 100%;

    div.textoProduto{
        flex: 80%;
        border: 2px solid red;
    }
    
    div.imagemProduto{
        flex: 20%;
        border: 2px solid red;
    }
`;