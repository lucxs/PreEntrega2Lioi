import React from 'react'
import Item from './item'

const ItemList = ({data}) => {
  
  return (
    <div className='ItemCont'>
    
      {data.map( (dat)=>(

        <Item key={dat.id}
          clave={dat.id}
          name={dat.name}
          img={dat.img}
          marca={dat.marca}
          
        />


        ))}
      
      

    
    </div>
  )
}

export default ItemList
