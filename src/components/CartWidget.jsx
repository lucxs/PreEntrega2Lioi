import React from 'react'
import { Button } from '@chakra-ui/react'
const CartWidget = () => {
  return (
    <div>
      <Button colorScheme='gray' className='cartBtn'><span className="material-symbols-outlined">
      shopping_cart
      </span><span className='cartBtn__Number'>2</span></Button>
    </div>
  )
}

export default CartWidget
