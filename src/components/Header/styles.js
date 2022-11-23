import styled from "styled-components";

export const MainHeader = styled.header`
    width: 100%;
    padding: 17px 3px 17px 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    gap: 15px;

    @media (min-width: 1100px) {
        justify-content: space-between;
        flex-direction: row;
    }
`

export const LogoHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;


    > h1 {
        font-size: 25px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        animation: BugerKenzie 2.5s ease 0s 1 normal forwards;
    }

    @keyframes BugerKenzie {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

    > p {
        font-size: 14px;
        color: #EB5757;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        animation: fadeKenzie 1.5s ease 0s 1 normal forwards;
    }

    @keyframes fadeKenzie {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`