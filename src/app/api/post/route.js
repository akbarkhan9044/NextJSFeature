import { connectDatabase } from "@/src/util/db";
import Product from "../../model/Product";

export const POST=async(request)=>{
    try{
        const data=await request.formData();
      let  newProduct=Object.fromEntries(data);
        const response=await Product.create(newProduct);
        return Response.redirect(`${process.env.NEXT_AUTH_URL}`)
    }catch(error){
        return new Response(JSON.stringify({message:"Error while adding data"}),{status:400});
    }

}


export const GET=async(request)=>
{
    try{
        const response=await Product.find();
        return new Response(JSON.stringify(response),{status:200});
    }catch(error){

            return new Response(JSON.stringify({message:"Error while getting data"}),{status:400})
    }
}