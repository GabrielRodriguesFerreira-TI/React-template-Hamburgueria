import { StyledButton, StyledButtonGreen } from "./styles"

export const Button = ({ children, handleClick, productId, removeCard, product, renderInput, searchClean }) => {
    return (
        <>
            {children === "Adicionar" && (
                <StyledButtonGreen isChild={children} onClick={() => handleClick(productId)} type="submit"> {children} </StyledButtonGreen>
            )}

            {children === "Remover" && (
                <StyledButton isChild={children} onClick={() => removeCard(product)} type="submit"> {children} </StyledButton>
            )}

            {children === "Pesquisar" && (
                <StyledButtonGreen isChild={children} onClick={(e) => renderInput(e)} type="submit"> {children} </StyledButtonGreen>
            )}

            {children === "Limpar busca" && (
                <StyledButtonGreen isChild={children} onClick={() => searchClean()} type="submit"> {children} </StyledButtonGreen>
            )}
        </>
    )
}