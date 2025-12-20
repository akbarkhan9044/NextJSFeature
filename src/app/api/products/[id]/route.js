import { connectDatabase } from "@/src/util/db";
import Product from "@/src/app/model/Product";

export const GET=async(request,{params})=>{
    try{
        await connectDatabase();
        const {id}=await params;
        console.log("Id is",id);
        const response=await Product.findById(id);
        return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while getting data"}),{status:400});
    }
}