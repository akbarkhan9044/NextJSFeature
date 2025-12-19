import React from 'react'
import Products from '../component/Product'
import {getAllProduct} from "../../util/server";


export default async function Product() {
    const data=await getAllProduct();
    console.log(data);
  return (
    <div>
 <Products data={data}/>
    </div>
  )
}
