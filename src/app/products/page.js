import React from 'react'
import Products from '../component/Product'
import {getAllProduct,getProducts} from "../../util/server";


export default async function Product() {
    const data=await getProducts();
    console.log(data);
  return (
    <div>
 <Products data={data}/>
    </div>
  )
}
