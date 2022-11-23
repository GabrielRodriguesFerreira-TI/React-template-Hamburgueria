import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${({ isChild }) => isChild === "Adicionar" ? "#ffffff" : "#BDBDBD"};
    padding: ${({ isChild }) => isChild === "Adicionar" ? "10px 20px" : "0px"};
    background: ${({ isChild }) => isChild === "Adicionar" ? "#27AE60" : "transparent"};
    border: ${({ isChild }) => isChild === "Adicionar" ? "2px solid #27AE60" : "0px"};
    border-radius: 8px;
`

export const StyledButtonGreen = styled.button`
    color: #ffffff;
    padding: 10px 20px;
    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #ffffff;
        background: #93D7AF;
        border: 2px solid #93D7AF;
    }
`