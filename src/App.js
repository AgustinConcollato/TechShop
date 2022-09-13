import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


const App = () =>{
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:idCategoria' element={<ItemListContainer />} />
        <Route exact path='/item/:idProducto' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App
