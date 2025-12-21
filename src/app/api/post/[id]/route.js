import { connectDatabase } from "@/src/util/db";
import Product from "@/src/app/model/Product";


export const GET=async(request,{params})=>{
    try{
        const {id}=await params;
        const response=await Product.findById(id);
        return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while getting data"}),{status:400});
    }
}


export const DELETE=async(request,{params})=>{
    try{
        await connectDatabase();
        const {id}=await params;
        const response=await Product.findByIdAndDelete(id);
        return new Response(JSON.stringify({message:"Deleted Successfully"}),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while Deleting."}),{status:400});
    }
}
export const PUT=async(request,{params})=>{
    try{
        await connectDatabase();
        const {id}=await params;
        console.log("id is",id);
        const response=await request.json();
        console.log("response",response);
        const  product=await Product.findByIdAndUpdate(id,response);
        return new Response(JSON.stringify(product),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while updating data"}),{status:400});
    }
}