"use client"
import React from 'react'
import styles from "@/styles/SingleProduct.module.css";
import { useRouter } from 'next/navigation';

export default function Products({data}) {
    const router=useRouter();
  return (
    <div>
        
      <div className={styles.grid} >
        {data && data.map((item)=>(
            <div key={item._id} className={styles.card}
            onClick={()=>{router.push(`/products/${item._id}`)}}
            >
               <div>
                <img src={item.image} loading='lazy' alt='' className={styles.image} />
               </div>
               <h5>{item.title}</h5>
            </div>
        ))}
      </div>
    </div>
  )
}
