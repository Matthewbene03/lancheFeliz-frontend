import styled from "styled-components";
import * as colors from "../../config/colors"

export const Container = styled.nav`
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  border: 2px solid blue;

  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white; */
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

export const Usuario = styled.div`
    height: 50px;
    width: 50px;
    background-color: #74e97461;
    border: 2px solid green;
    border-radius: 50%;
`;