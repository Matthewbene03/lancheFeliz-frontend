import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../config/colors"

export const Container = styled.nav`
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  background-color: ${colors.PrimeiraCorClara};
`;

export const Title1 = styled.h1`
    font-size: 35px;
    color: ${colors.CorCinzaEscuro};
`;

export const Categoria = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`;

export const LinkCategoria = styled(Link)`
    color: ${colors.CorCinzaEscuro};
    padding: 5px 10px;
    
    &:hover{
        border-bottom: 1.5px solid ${colors.CorCinzaEscuro};
    }
`;

export const Carrinho = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.CorCinzaEscuro};
    
    .carrinho{
        height: 70%;
        width: 70%;
    }
`;