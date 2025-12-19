import React from 'react'

export default function Products({data}) {
  return (
    <div>
        
      <div>
        {data && data.map((item)=>(
            <div key={item.id}>
                <h4>{item.title}</h4>
            </div>
        ))}
      </div>
    </div>
  )
}
