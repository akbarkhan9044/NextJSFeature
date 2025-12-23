"use cache"
import React from 'react'
import Products from '../component/Product'
import {getAllProduct,getProducts} from "../../util/server";
import { cacheTag } from 'next/cache';

export default async function Product() {
  cacheTag("add-user")
    const data=await getProducts();
    console.log(data);
  return (
    <div>
 <Products data={data}/>
    </div>
  )
}
