import styled from "styled-components";


export const FormSearch = styled.form`
    width: 85%;
    max-width: 350px;
    padding: 5px 7px 5px 7px;
    display: flex;
    justify-content: space-between;
    border: 2px solid #E0E0E0;
    background: #ffffff;
    border-radius: 8px;
    transition: 0.3s ease-in-out;

    &:hover{
        border: 2px solid #333333;
    }

    > input {
        border: none;
        outline: none;
    }

    > button{
        color: #ffffff;
        border: 2px solid #27AE60;
        padding: 9px 13px 9px 13px;
        border-radius: 8px;
        background-color: #27AE60;
    }
`