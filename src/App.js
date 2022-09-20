import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext' 


const App = () =>{

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:idCategoria' element={<ItemListContainer />} />
        <Route exact path='/item/:idProducto' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App
