import styled from "styled-components";
import * as colors from "../../config/colors"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    
    div.containerBemVindo{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        
        height: 60vh;
        width: 50vw;
        border: 1.5px solid ${colors.PrimeiraCorEscura};
        border-radius: 10px;
    }
`;