"use client"
import React from 'react'
import { deleteProductById } from '../actions/deleteProduct'

export default function DeleteProduct({id}) {
  return (
    <div>
      <button onClick={()=>{
        deleteProductById(id);
      }}>Delete</button>
    </div>
  )
}
