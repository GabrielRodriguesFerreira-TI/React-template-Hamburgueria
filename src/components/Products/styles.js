import styled, { css } from "styled-components";

export const LiList = styled.li`
    border: 2px solid #E0E0E0;
    border-radius: 6px;
    min-width: 280px;
    height: 95%;
    max-height: 346px;
    transition: 0.3s ease-in-out;
    -webkit-filter: brightness(85%);
    animation: myAnim 1s ease 0s 1 normal forwards;

    ${({ position }) => {
        switch (position) {
            case 0 :
                return css`
                animation: myAnim 2.5s ease 0s 1 normal forwards;    
                `;
            case 1 :
                return css`
                animation: myAnim 2s ease 0s 1 normal forwards;    
                `;
            case 2 : 
                return css`
                animation: myAnim 1s ease 0s 1 normal forwards; 
                `;
            case 3 :
                return css`
                animation: myAnim 2.5s ease 0s 1 normal forwards;   
                `;
            case 4 :
                return css`
                animation: myAnim 2s ease 0s 1 normal forwards;  
                `;
            case 5 :
                return css`
                animation: myAnim 1s ease 0s 1 normal forwards; 
                `
        }
    }}

    &:hover {
        border: 2px solid #333333;
        -webkit-filter: brightness(100%);
    }

    @keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateX(-150px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

`

export const FigureLi = styled.figure`
    display: flex;
    border-radius: 6px 6px 0px 0px;
    justify-content:center;
    background: #F5F5F5;

    > img {
        width: 170px;
        height: 150px;
        transition: 0.3s ease-in-out;
        transform: ${({ categoryimg }) => categoryimg === "Bebidas" && "translateY(-15px)"};
    }
`

export const DivDescription = styled.div`
    padding: 25px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    > h2 {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
    }

    > p {
        color: #828282;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }

    > span {
        color: #27AE60;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
`