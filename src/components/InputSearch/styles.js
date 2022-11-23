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
    animation: InputEntrace 1s ease 0s 1 normal forwards;

    &:hover{
        border: 2px solid #333333;
    }

    > input {
        border: none;
        outline: none;
        transition: 0.3s ease-in-out;
    }

    @keyframes InputEntrace {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

    > button{
        color: #ffffff;
        border: 2px solid #27AE60;
        padding: 9px 13px 9px 13px;
        border-radius: 8px;
        background-color: #27AE60;
        transition: 0.3s ease-in-out;
        animation: buttonEntrace 2s ease 0s 1 normal forwards;
    }

    @keyframes buttonEntrace {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
`