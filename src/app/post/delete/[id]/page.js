import DeletePostData from '@/src/app/postcomponent/DeletePost';
import React from 'react'

export default async function Delete({params}) {
    const {id}=await params;
  return (
    <div>
  {id && (    <DeletePostData  id={id} />)}
    </div>
  )
}
