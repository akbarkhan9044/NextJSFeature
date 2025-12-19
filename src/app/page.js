import React from 'react'
import Link from 'next/link';
import styles from "@/styles/Product.module.css";
import { FaBagShopping } from "react-icons/fa6";
export default function LandingPage() {
  return (
    <div className={styles.product}>
       
    <Link href="/products" className={styles.link}>Products</Link>
    <div className={styles.icons}>
    <FaBagShopping size={40} className={styles.icons} />
    </div>
    </div>
  )
}
