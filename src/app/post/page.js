"use cache"
import React from 'react'
import Postdata from '../postcomponent/Postdata'
import { getAllPost } from '@/src/util/server'
import { cacheLife } from 'next/cache';
export default async function Post() {
  cacheLife("seconds");
    const response=await getAllPost();
  return (
    <div>
      {response && (  <Postdata  data={response} />)}
    </div>
  )
}
