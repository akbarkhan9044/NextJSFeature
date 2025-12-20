"use server"
import { connectDatabase } from "@/src/util/db";
import Product from "../model/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function updateSingleProduct(id,formData){
    console.log(id);
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
      await connectDatabase();
      const response=await Product.findByIdAndUpdate(id,product);
      revalidatePath("/","page");
      redirect("/products");
}