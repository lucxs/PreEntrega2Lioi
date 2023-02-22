import React from 'react'
import ItemDetail from './ItemDetail'
import Data from "../data.json";
 import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
     const {id} = useParams(); 
    const GetDatos = ()=>{
        return new Promise((resolve,reject)=>{
            if (Data.length >0) {
                resolve(Data)
            }else{
                reject(new Error ("No hay data"))
            }

        })
    }

    async function fetchingData() {
        try {
            const datosFetched = await GetDatos();
        } catch (error) {
            console.log(error);
        }
    }

    fetchingData();

     const productsFilter = Data.filter((data)=>data.id == id)


  return (
    <div className='itemDcont'>
            {id ? <ItemDetail data ={productsFilter}/> :  <ItemDetail data ={Data}/>   }
    </div>
    
    
  )
}

export default ItemDetailContainer
