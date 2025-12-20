import React from 'react'
import DetailProduct from '../../component/DetailProduct';

export default async function DetailPage({params}) {
    const {id}=await  params;
  return (
    <div>
      {id &&(  <DetailProduct  id={id} />)}

    </div>
  )
}
