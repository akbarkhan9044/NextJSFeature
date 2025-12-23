"use cache"
import { getAllUser } from '@/src/util/server';
import React from 'react'
import Link from 'next/link';
export default async function User() {

  const response=await getAllUser();

    return (
      <div >
        {response && response.map((item)=>(
          <Link 
          key={item.id}
          href={`/user/${item.id}`}>{item.name}</Link>
        ))}
      </div>
    )
}
