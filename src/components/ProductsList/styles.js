import styled from "styled-components";

export const DivProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;

    > div {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        animation: upAnimy 1s ease 0s 1 normal forwards;
    }

    @keyframes upAnimy {
	0% {
		opacity: 0;
		transform: translateY(-250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

    > div > Button {
        margin-top: -5px;
        margin-right: 20px;
    }

    @media (min-width: 1100px) {
        padding-top: 15px ;
        width: 950px;
        height: 760px;
        align-items: flex-start;

        > div {
        padding-bottom:38px ;
        }

        > div > Button {
        margin-top: -10px;
        margin-right: 35px;    
        }
    }
`

export const UlList = styled.ul`
    width: 95%;
    height: 346px;
    display: flex;
    overflow-y: auto;
    gap: 20px;
    transition: 0.3s ease-in-out;

    @media (min-width: 1100px) {
        width: 100%;
        height: 750px;
        display: flex;
        flex-wrap: wrap;
        overflow: unset;
    }
`

export const TitleSearch = styled.h2`
   margin-left: 20px;
   margin-bottom: 20px;
   font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;

    > span {
        color: #828282;
    }

    @media (min-width: 1100px) {
    margin-left: 0px;
    margin-bottom: 00px;
    }
`