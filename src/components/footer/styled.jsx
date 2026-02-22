import styled from "styled-components";
import * as colors from "../../config/colors"

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    height: 12vh;
    padding: 0px 30%;
    background-color: ${colors.SegundaCorClara};
    
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    
    p{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
        width: 100px;

        font-size: 18px;
        font-weight: bold;
        color: ${colors.CorCinzaEscuro};

        border-radius: 15px;
        background-color: ${({ pagAtiva }) => (pagAtiva ? "red" : colors.PrimeiraCorClara)};

        transition: all 300ms;
    }
    
    p:hover{
        background-color: ${colors.PrimeiraCorClara};
    }
`;

export const Item = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
        width: 100px;

        font-size: 20px;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        color: ${colors.CorCinzaEscuro};

        border-radius: 15px;
        background-color: ${({ $pagAtiva }) => ($pagAtiva ? colors.PrimeiraCorClara: "none")};

        cursor: pointer;
        transition: all 300ms;
    
    &:hover{
        background-color: ${colors.PrimeiraCorClara};
    }
`;