import styled from "styled-components";

export const LiList = styled.li`
    display: flex;
    justify-content: space-between;
    animation: fadeIn 1s ease 0s 1 normal forwards;
    transition: 0.3s ease-in-out;
    -webkit-filter: brightness(85%);

    &:hover {
        -webkit-filter: brightness(100%);
    }

    @keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateX(-100px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
`

export const LiListFadeOut = styled.li`
    display: flex;
    justify-content: space-between;
    animation: fadeOut 1s ease 0s 1 normal forwards;
    transition: 0.3s ease-in-out;
    -webkit-filter: brightness(85%);

    &:hover {
        -webkit-filter: brightness(100%);
    }

    @keyframes fadeOut {
	0% {
		opacity: 1;
		transform: translateX(0);
	}

	100% {
		opacity: 0;
		transform: translateX(-100px);
	}
}
`

export const FigureLi = styled.figure`
    display: flex;
    border-radius: 6px;
    justify-content:center;
    background: #E0E0E0;

    > img {
        width: 70px;
        height: 80px;
        transform: ${({ categoryimg }) => categoryimg === "Bebidas" && "translateY(-15px)"};
    }
`

export const DivDescription = styled.div`
    width: 80%;
    padding: 10px 5px 15px 5px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    > div h2 {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
    }

    > div p {
        color: #828282;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`