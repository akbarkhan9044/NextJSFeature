"use server"
import { connectDatabase } from "@/src/util/db"
import Product from "../model/Product"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProductAction(formData){
   await connectDatabase();
  
   const product = {
    title: formData.get("title"),
    price: Number(formData.get("price")),
    description: formData.get("description"),
    category: formData.get("category"),
    image: formData.get("image"),
    rating: {
      rate: Number(formData.get("rate")),
      count: Number(formData.get("count")),
    },
  };

  const createProduct=await Product.create(product);
  revalidatePath("/","page");
  redirect("/products")

   
}