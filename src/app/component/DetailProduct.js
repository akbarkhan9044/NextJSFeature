"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
export default function DetailProduct({id}) {
    const router=useRouter();
  return (
    <div>
      Welcome to Detail
      <button onClick={()=>{
        router.push(`/products/edit/${id}`)
      }}>Edit Product</button>
       <button onClick={()=>{
        router.push(`/products/delete/${id}`)
      }}>Delete Product</button>
    </div>
  )
}
