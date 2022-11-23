import { InputSearch } from "../InputSearch"
import { Container, LogoHeader, MainHeader } from "./styles"


export const Header = ({ setProductsList, showProducts, setSearchValue }) => {
    return (
        <MainHeader>
                <Container>
                    <LogoHeader>
                        <h1>Burguer</h1>
                        <p>Kenzie</p>
                    </LogoHeader>

                    <InputSearch setSearchValue={setSearchValue} showProducts={showProducts} setProductsList={setProductsList} />
                </Container>
        </MainHeader>
    )
}