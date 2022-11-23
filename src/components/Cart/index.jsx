import { TotalCart } from "../TotalCart"
import { Card } from "./Card"
import { CartContent, EmptyCart, HeaderCart, MainDiv, UlList } from "./styles"

export const Cart = ({ productsList, totalValue, removeCard, removeAllCard, filteredProducts, fade}) => {
    return (
        <MainDiv>
            <CartContent>
                <HeaderCart>
                    <div>
                        <h2>Carrinho de compras</h2>
                    </div>
                </HeaderCart>

                {productsList.length === 0 ? (
                    <EmptyCart>
                        <div>
                            <p>Sua sacola está vazia</p>
                            <span>Adicione itens</span>
                        </div>
                    </EmptyCart>
                ) : (
                    <>
                        <UlList>
                            <Card fade={fade} removeCard={removeCard} productsList={productsList}></Card>
                        </UlList>

                        <TotalCart filteredProducts={filteredProducts} removeAllCards={removeAllCard} value={totalValue}></TotalCart>
                    </>
                )}
            </CartContent>
        </MainDiv>
    )
}