import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Button, Heading, Divider, Image, Text, ButtonGroup } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'
import  image  from "../assets/img/producto1.jpg";

const ItemDetail = ({data}) => {
  return (

        data.map((dat)=>(
            <div key={dat.id}>
                <Card maxW='sm'>
  <CardBody>
    
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{dat.name}</Heading>
      <Text>
        {dat.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        <span>$</span>{dat.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy
      </Button>
      <Button >
        <ItemCount/>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

            </div>

        ))

    
  )
}

export default ItemDetail
