import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext' 
import Success from './components/Success/Success'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu_E4dO-0y0H6paI1IwOEMtbeweN9Pv7U",
  authDomain: "proyecto-coderhouse-a5061.firebaseapp.com",
  projectId: "proyecto-coderhouse-a5061",
  storageBucket: "proyecto-coderhouse-a5061.appspot.com",
  messagingSenderId: "401130081517",
  appId: "1:401130081517:web:b0c7c088da51e234d310e4"
};

initializeApp(firebaseConfig);

const App = () =>{

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:idCategoria' element={<ItemListContainer />} />
        <Route exact path='/item/:idProducto' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/success/:orderId' element={<Success />} />
      </Routes>
    </CartProvider>
  );
}

export default App
