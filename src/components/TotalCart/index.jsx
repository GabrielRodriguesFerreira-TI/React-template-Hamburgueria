import { DivTotal } from "./styled"

export const TotalCart = ({ value, removeAllCards, setCurrentSale, filteredProducts }) => {

    const result = filteredProducts.reduce((previousValue, currentValue) => {
        return currentValue.price + previousValue
    }, 0)

    return (
        <DivTotal>
            <div>
                <p>Total</p>
                <span>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(result)}</span>
            </div>
            <button onClick={() => removeAllCards()}>Remover todos</button>
        </DivTotal>
    )
}