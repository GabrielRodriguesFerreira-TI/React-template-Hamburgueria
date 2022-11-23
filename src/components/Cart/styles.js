import styled from "styled-components";

export const MainDiv = styled.div`
    padding: 10px 10px 10px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1100px) {
    margin-top: 25px;
    width: 350px;
    height: 600px;
    }
`

export const CartContent = styled.div`
    width: 95%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
`

export const HeaderCart = styled.div`
    width: 100%;
    height: 65px;
    background: #27AE60;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 25px;

    > div {
        padding: 25px 20px 25px 20px;
    }

    > div > h2 {
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 18px;
    }
`

export const EmptyCart = styled.div`
    > div {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        gap: 20px;
    }

    > div > p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
    }

    > div > span {
        color: #828282;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
`


export const UlList = styled.ul`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`