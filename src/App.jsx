import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Container } from '@chakra-ui/react'

const App = () => {

  return (
    <Container maxW='100%'>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Mirage"/>
    </Container>
  )
}

export default App
