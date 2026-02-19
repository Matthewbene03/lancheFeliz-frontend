import styled from "styled-components";
import * as colors from "../../config/colors"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    border: 2px solid red;
    
    div.containerProdutosSalgados{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        
        height: 60vh;
        width: 50vw;
        box-shadow: 0px 0px 10px ${colors.PrimeiraCorClara}, 0px 0px 40px ${colors.PrimeiraCorEscura};

    }
`;