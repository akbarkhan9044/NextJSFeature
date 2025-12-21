import EditNewPost from '@/src/app/postcomponent/EditPost';
import { getPostById } from '@/src/util/server';
import React from 'react'

export default async function Edit({params}) {
    const {id}=await params;
    const response=await getPostById(id);
  return (
    <div>
      {response && (<EditNewPost data={response} id={id}     />)}
    </div>
  )
}
