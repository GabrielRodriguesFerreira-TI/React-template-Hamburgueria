import { Button } from "../Button"
import { DivDescription, FigureLi, LiList } from "./styles"

export const Products = ({ productsList, handleClick }) => {
    return (
        <>
            {productsList.map((element, index) => {
                return (
                    <LiList position={index}>
                        <FigureLi categoryimg={element.category}>
                            <img src={element.img}></img>
                        </FigureLi>

                        <DivDescription>
                            <h2>{element.name}</h2>
                            <p>{element.category}</p>
                            <span>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(element.price)}</span>
                            <Button productId={element.id} handleClick={handleClick} children="Adicionar"></Button>
                        </DivDescription>
                    </LiList>
                )
            })}
        </>
    )
}