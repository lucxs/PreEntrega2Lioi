import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
 import { Button } from '@chakra-ui/react'
 import { Flex, Spacer } from '@chakra-ui/react'
 import { Box } from '@chakra-ui/react'
 import { Heading } from '@chakra-ui/react'
 import { ButtonGroup } from '@chakra-ui/react'
 import {ChevronDownIcon} from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <div  >

    <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent='center' border='1px' borderColor='gray.200' className='menu' borderBottomRadius='5'>
        <Box p='2'>
          <Heading size='md'>Mirage</Heading>
        </Box>
        <Spacer />
        <Menu>
          <ButtonGroup gap='2'>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Marcas
                </MenuButton>
                <MenuList>
                    <MenuItem>Versace</MenuItem>
                    <MenuItem>Prada</MenuItem>
                    <MenuItem>Gucci</MenuItem>
                    <MenuItem>Ray-ban</MenuItem>
                    <MenuItem>Tous</MenuItem>
                </MenuList>
                <CartWidget/>
            </ButtonGroup>
          </Menu>
    </Flex>       
      
    </div>
  )
}

export default NavBar
