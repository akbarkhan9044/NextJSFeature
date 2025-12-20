import React from 'react'

export default async function DetailPage({params}) {
    const {id}=await  params;
  return (
    <div>
      Welcome to Detail Page-{id}
    </div>
  )
}
