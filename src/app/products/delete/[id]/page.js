import DeleteProduct from '@/src/app/component/DeleteProduct';
import React from 'react'

export default async function Delete({params}) {
    const {id}=await params;
  return (
    <div>
      <DeleteProduct id={id} />
    </div>
  )
}
