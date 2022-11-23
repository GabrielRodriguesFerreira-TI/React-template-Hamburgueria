import { Button } from "../../Button"
import { DivDescription, FigureLi, LiList, LiListFadeOut } from "./styled"

export const Card = ({ productsList, removeCard, fade }) => {
    return (
        <>
            {productsList.map((element, index) => {
                return (
                    <>
                        {fade === "fadeIn" ? (
                            <LiList fade={fade}>
                                <FigureLi categoryimg={element.category}>
                                    <img src={element.img}></img>
                                </FigureLi>

                                <DivDescription>
                                    <div elipse={element.name.length}>
                                        {element.name.length > 10 ? (
                                            <h2>{element.name.substring(0, 10)}...</h2>
                                        ) : (
                                            <h2>{element.name}</h2>
                                        )}
                                        <p>{element.category}</p>
                                    </div>
                                    <Button product={element} removeCard={removeCard} productId={element.id} children="Remover"></Button>
                                </DivDescription>
                            </LiList>

                        ) : (
                            <LiListFadeOut fade={fade}>
                                <FigureLi categoryimg={element.category}>
                                    <img src={element.img}></img>
                                </FigureLi>

                                <DivDescription>
                                    <div elipse={element.name.length}>
                                        {element.name.length > 10 ? (
                                            <h2>{element.name.substring(0, 10)}...</h2>
                                        ) : (
                                            <h2>{element.name}</h2>
                                        )}
                                        <p>{element.category}</p>
                                    </div>
                                    <Button product={element} removeCard={removeCard} productId={element.id} children="Remover"></Button>
                                </DivDescription>
                            </LiListFadeOut>
                        )}
                    </>
                )
            })}
        </>
    )
}