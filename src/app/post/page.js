import React from 'react'
import Postdata from '../postcomponent/Postdata'
import { getAllPost } from '@/src/util/server'

export default async function Post() {
    const response=await getAllPost();
  return (
    <div>
      {response && (  <Postdata  data={response} />)}
    </div>
  )
}
