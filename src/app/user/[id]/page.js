import { getAllUser } from '@/src/util/server'
import Link from 'next/link';
import React from 'react'

export default async function page({params}) {
    const response=await getAllUser();
    const {id}=await params;
    console.log(response);
    const data=response[id-1]
    console.log(data)
  return (
    <div>
    {data &&<div>{data.username}</div>}
    </div>
  )
}

export async function generateStaticParams(){
    const users=await getAllUser();
    return users.map(user=>({
        id:user.id.toString()
    }))
}
