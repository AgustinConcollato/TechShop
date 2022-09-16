import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

const App = () =>{

  const [posicion, setPosicion ] = useState(window.pageYOffset)
  const [heightHeader, setHeightHeader] = useState(120)

  useEffect(()=>{
    window.onscroll = () => {
      if(posicion <= window.pageYOffset){
        setHeightHeader(80)
      }else{
        setHeightHeader(120)
      }
      setPosicion(window.pageYOffset)
    }
  }, [posicion])

  return (
    <div>
      <NavBar heightHeader={heightHeader} />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:idCategoria' element={<ItemListContainer />} />
        <Route exact path='/item/:idProducto' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App
