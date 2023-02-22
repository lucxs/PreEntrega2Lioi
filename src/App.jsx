import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/cart";
import Welcome from "./components/Welcome";
const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
    <Route exact path="/" element={<Welcome/>} />
    <Route exact path="/marca" element={<ItemListContainer greeting="Bienvenidos a Mirage" />} />
      <Route exact path="/marca/:marca" element={<ItemListContainer greeting="Bienvenidos a Mirage" />} />
       <Route exact path="item/:id" element={<ItemDetailContainer/>} /> 
      <Route exact path="/cart" element={<Cart/>} />
      
    </Routes>
      
    </BrowserRouter>
  );
}

export default App
