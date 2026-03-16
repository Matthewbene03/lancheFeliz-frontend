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
        
        gap: 10px;
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
    /* border: 2px solid red; */
`;

export const Form = styled.form`
    flex: 90%;

    width: 80%;
    padding-bottom: 50px;
    padding-right: 15px;
    overflow:auto;
    
    #fotoProduto{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
        width: auto;
        margin-bottom: 20px;
        overflow:hidden;
        /* border: 2px solid red; */
        /* border-radius: 50% */
    }

    #fotoProduto div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        
        height: 150px;
        width: 150px;
        overflow:hidden;
        /* cursor: pointer; */
        border-radius: 50%;
        border: 1.5px dashed ${colors.CorCinza};
    }
    
    #fotoProduto div img{
        height: 100%;
        width: 100%;
    }

    #fotoProduto div p{
        text-align: center;
        font-size: 20px;
    }

    label{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 18px;
        
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: ${colors.SegundaCorEscura};
    }
    
    #fotoProduto #labelArquivofoto{
        /*Editar o label para arquivo de fotos*/
        flex-direction: row;
        align-items: center;
        font-size: 20px;
        color: ${colors.CorCinzaClaro};
        background-color: ${colors.SegundaCorClara};
        border-radius: 10px;
        padding: 10px 20px;
        transition: 300ms;
        cursor: pointer;
        /* border: 2px solid red; */
    }
    
    #fotoProduto #labelArquivofoto:hover{
        filter: brightness(1.2);
    }

    #fotoProduto #labelArquivofoto input{
        display: none;
        border: none;
    }

    input, select{
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

export const LinkProduto = styled(Link)`
    background-color: ${colors.PrimeiraCorClara};
    color: ${colors.CorBranca};
    border-radius: 10px;
    padding: 10px 25px;
`;

