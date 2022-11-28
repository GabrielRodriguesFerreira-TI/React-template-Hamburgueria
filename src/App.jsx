import { useEffect, useState } from 'react'
import { client } from './Api'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductsList } from './components/ProductsList'
import { Container, MainDiv } from './Styles'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(0)
  const [searchValue, setSearchValue] = useState("")
  const [fade, setFade] = useState("fadeIn")

  useEffect(() => {
    const getApi = async () => {
      const response = await client.get()
      setProducts(response.data)
      setShowProducts(response.data)
    }
    getApi()
  }, [])


  const notifyError = () => {
    toast.error('Você já adicionou esse item ao carrinho!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const notifySucess = () => {
    toast.success('Item adicionado ao carrinho!', {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  const handleClick = (id) => {

    const result = products.find(element => {
      return element.id == id
    })

    const verifiction = filteredProducts.some(element => element.id === id)
    if(verifiction) {
      notifyError()
    } else {
      setFilteredProducts([...filteredProducts, result])
      notifySucess()
    }

  }


  const removeCard = (card) => {
    setFade(card.name)

    setTimeout(function() {
      const result = filteredProducts.filter(element => {
        return element !== card
      })
      setFilteredProducts(result)
      setFade("fadeIn")
    }, 1100)
  }


  const removeAllCards = () => {
    setFade("fadeOut")
    
    setTimeout(function(){
      setFilteredProducts([])
      setFade("fadeIn")
    }, 1100)
  }

  return (
    <MainDiv>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
          <Header setSearchValue={setSearchValue} showProducts={showProducts} setProductsList={setProducts}></Header>
      <Container>
          <ProductsList setSearchValue={setSearchValue} searchValue={searchValue} setProducts={setProducts} showProducts={showProducts} handleClick={handleClick} products={products}></ProductsList>
          <Cart fade={fade} filteredProducts={filteredProducts} removeAllCard={removeAllCards} removeCard={removeCard} totalValue={currentSale} productsList={filteredProducts}></Cart>
      </Container>
    </MainDiv>
  )
}

export default App
