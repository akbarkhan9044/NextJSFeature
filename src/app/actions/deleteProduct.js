"use server"

import { connectDatabase } from "@/src/util/db"
import Product from "../model/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProductById(id){
    await connectDatabase();
    const deleteProduct=await Product.findByIdAndDelete(id);
    revalidatePath("/","page");
    redirect("/products")
}