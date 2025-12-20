import React from 'react'
import UpdateSingleProduct from '../../../component/UpdateProduct'
import { getSingleProduct } from '@/src/util/server';

export default async function UpdateProduct({params}) {
 
  const {id}=await params;
  const response=await getSingleProduct(id);

  return (
    <div>
       {response &&( <UpdateSingleProduct
        id={id} data={response}
        />
        )}
    </div>
  )
}
