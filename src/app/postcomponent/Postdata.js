import React from 'react'
import Link from 'next/link'


export default function Postdata({data}) {
  return (
    <div>
      <div>{data && data.map((item)=>(
        <div key={item._id}>
            <h3>{item.title}</h3>
            <Link href={`/post/edit/${item._id}`}>Edit</Link>
            <Link href={`/post/delete/${item._id}`}>Delete</Link>
        </div>
      ))}</div>
    </div>
  )
}
