import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Button, Heading, Divider, Image, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import  image  from "../assets/img/producto1.jpg";
const Item = ({clave, name, marca}) => {

  return (
          <div key={clave}>
          <Card maxW='sm' >
            <CardBody >
                <Image
                 src={image}
                 alt='Green double couch with wooden legs'
                 borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'  >{name}</Heading>
                  <Text>
                    Marca: {marca}
                 </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>

            
            <Button variant='solid' colorScheme='blue'>
               <Link to={`/item/${clave}`} >Details</Link> 
            </Button>
            
            
            </CardFooter>
          </Card>
          </div>
  )
}

export default Item
