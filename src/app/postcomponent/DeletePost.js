"use client"
import React from 'react'
import { deletePostById } from '@/src/util/server';
import { useRouter } from 'next/navigation';
export default function DeletePostData({id}) {
    const router=useRouter();
    const handleDelete=async(id)=>{
        const response=await deletePostById(id);
        if(response){
            router.push("/post");
        }
    }
  return (
    <div>
      <button
      onClick={()=>{
       handleDelete(id)
      }}
      >Delete</button>
    </div>
  )
}
