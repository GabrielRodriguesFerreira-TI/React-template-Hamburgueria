import styled from "styled-components";

export const DivTotal = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    > div {
        padding: 20px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #E0E0E0;
    }

    > div > p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
    }

    > div > span {
        color: #828282;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
    }

    > button {
        color: #828282;
        padding: 18px 20px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        transition: all 0.3s ease-in-out;
    }

    > button:hover {
        color: #E0E0E0;
        background: #828282;
    }
`