const API_DOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN?process.env.NEXT_PUBLIC_API_DOMAIN:null;

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

        export async function getProducts(){
            try{
                const response=await fetch(`${API_DOMAIN}/products`,{cache:"no-cache"});
                const res=await response.json();
                return res;
            }catch(error){  
                console.log(error);
                return [];
            }
        }

        export async function getSingleProduct(id){
            try{
                const response=await fetch(`${API_DOMAIN}/products/${id}`)
                const res=await response.json();
                return res;
            }catch(error){  
                console.log(error);
                return {};
            }
        }

    