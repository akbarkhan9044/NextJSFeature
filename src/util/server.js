
        export async function getAllProduct(){
        try{
            const response=await fetch("https://fakestoreapi.com/products");
            const res=await response.json();
            return res;
        }catch(error){
            console.log(error);
            return [];
        }
        }

    