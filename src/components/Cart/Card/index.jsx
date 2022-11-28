import { Button } from "../../Button"
import { DivDescription, FigureLi, LiList, LiListFadeOut } from "./styled"

export const Card = ({ productsList, removeCard, fade }) => {
    return (
        <>
            {productsList.map((element, index) => {
                return (
                    <>
                        {fade === element.name || fade === "fadeOut" ? (
                            <LiListFadeOut fade={element.fade}>
                                <FigureLi categoryimg={element.category}>
                                    <img src={element.img}></img>
                                </FigureLi>

                                <DivDescription>
                                    <div elipse={element.name.length}>
                                        {element.name.length > 10 ? (
                                            <h2>{element.name.substring(0, 6)}...</h2>
                                        ) : (
                                            <h2>{element.name}</h2>
                                        )}
                                        <p>{element.category}</p>
                                    </div>
                                    <Button product={element} removeCard={removeCard} productId={element.id} children="Remover"></Button>
                                </DivDescription>
                            </LiListFadeOut>

                        ) : (
                            <LiList>
                                <FigureLi categoryimg={element.category}>
                                    <img src={element.img}></img>
                                </FigureLi>

                                <DivDescription>
                                    <div elipse={element.name.length}>
                                        {element.name.length > 10 ? (
                                            <h2>{element.name.substring(0, 8)}...</h2>
                                        ) : (
                                            <h2>{element.name}</h2>
                                        )}
                                        <p>{element.category}</p>
                                    </div>
                                    <Button product={element} removeCard={removeCard} productId={element.id} children="Remover"></Button>
                                </DivDescription>
                            </LiList>
                        )}
                    </>
                )
            })}
        </>
    )
}