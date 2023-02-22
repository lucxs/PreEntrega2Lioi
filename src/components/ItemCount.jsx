import React from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,useNumberInput,HStack, Button, Input
  } from '@chakra-ui/react'

    
    const ItemCount = () => {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 6,
        precision: 0,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
      return (
        <HStack maxW='320px'>
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
      )
    }
    

    
      



export default ItemCount
