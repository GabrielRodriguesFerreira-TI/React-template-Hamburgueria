import { useState } from "react"
import { Button } from "../Button"
import { FormSearch } from "./styles"

export const InputSearch = ({ setProductsList, showProducts, setSearchValue }) => {
    const [inputSearch, setInputSearch] = useState("")

    const renderInput = (e) => {
        e.preventDefault()
        const findProduct = showProducts?.filter(element => {
            return element?.category.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "").includes(inputSearch.toLowerCase()) || element?.name.toLowerCase().normalize("NFD").replace(/\p{Mn}/gu, "").includes(inputSearch.toLowerCase())
        })
        setProductsList(findProduct)
        setSearchValue(inputSearch.trim())

        setInputSearch("")
    }

    return (
        <FormSearch onChange={(event) => event.preventDefault()}>
            <input type="search" placeholder="Digitar Pesquisa" value={inputSearch} onChange={(event) => setInputSearch(event.target.value)} required />
            <Button renderInput={renderInput} children="Pesquisar"></Button>
        </FormSearch>
    )
}