import { connectDatabase } from "@/src/util/db";
import Product from "../../model/Product";

export const GET=async()=>{
    try{
        await connectDatabase();
        const product=await  Product.find();
        return new Response(JSON.stringify(product),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while getting data"},{status:400}));
    }
}