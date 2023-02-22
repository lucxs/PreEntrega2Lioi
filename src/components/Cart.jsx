import React, {  useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input, Button
  } from '@chakra-ui/react'

const Cart = () => {

        const [input, setInput] = useState('')
      
        const handleInputChange = (e) => setInput(e.target.value)
      
        const isError = input === ''
      
        return (
          <div className="CartCont">

            <div className='CartCont__form'>
          <FormControl isInvalid={isError}>
            <FormLabel>Your name</FormLabel>
            <Input type='text' value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter your name.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
            <FormLabel>Email</FormLabel>
            <Input type='email' value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}

            <FormLabel>What do you want to tell us?</FormLabel>
            <textarea value={input} cols="30" rows="10" onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}

                  <Button colorScheme='teal' size='md'>
                  Send
                        </Button>


          </FormControl>
          </div>
          </div>
        )
      
}

export default Cart
