import React, { useEffect, useState } from 'react'
import ItemList from './itemList'
import { useParams } from "react-router-dom";
import  Data from "../data.json";

const ItemListContainer = ({greeting}) => {
    const {marca} = useParams(); 
console.log("Esta es la marca:", marca);

    const [products, setProduct] = useState([]);



  useEffect(() => {
    async function GetDatos() {
      try { 
        const response = await fetch(Data);
        const data = await response.json();
        setProduct(data)
      } catch (error) {
        console.log(error);
      }
    }

      GetDatos();
  }, []);

      const productsFilter = Data.filter( dat => dat.marca === marca)

  
  return (
    <>
    <div className='itemLcont'>
      {greeting} 
      
    </div>
    <div>
       {marca ? <ItemList data={productsFilter}/> :  <ItemList data={Data}/> }  

     
    </div>
    </>
  )
}

export default ItemListContainer
