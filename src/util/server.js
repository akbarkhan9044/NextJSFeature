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


        export async function getAllPost(){
            try{
                const response=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post`,{cache:"no-cache"});
                const res=await response.json();
                return res;
            }catch(error){
                console.log(error);
                return [];
            }
        }

        export async function getPostById(id){
            try{
                const response=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/${id}`,{cache:"no-cache"});
                const res=await response.json();
                return res;
            }catch(error){
                console.log(error);
                return {};
            }
        }

        export async function deletePostById(id){
            try{
                const response=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/${id}`,{
                    method:"DELETE",
                    cache:"no-cache"
                });
                const resp=await response.json();
                return resp;
            }catch(error){
                console.log(error);
            }
        }

        export async function editPostData(id,data){
            try{
            const response=await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data),
                cache:"no-cache"});
                const res=await response.json();
                return res;
            }catch(error){
                console.log(error);
                return {};
            }

               
        }


    

    