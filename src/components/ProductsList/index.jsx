import { Button } from "../Button"
import { Products } from "../Products"
import { DivProducts, TitleSearch, UlList } from "./styles"

export const ProductsList = ({ products, handleClick, showProducts, setProducts, searchValue, setSearchValue,}) => {

    const searchClear = () => {
        setProducts(showProducts)
        setSearchValue("")
    }
    return (
        <>
            <DivProducts>
                {searchValue?.length !== 0 && (
                    <div>
                        <TitleSearch>Resultados para: <span> {searchValue} </span></TitleSearch>
                        <Button searchClean={searchClear} children="Limpar busca"></Button>
                    </div>
                )}
                <UlList>
                    <Products handleClick={handleClick} productsList={products}></Products>
                </UlList>
            </DivProducts>
        </>
    )
}