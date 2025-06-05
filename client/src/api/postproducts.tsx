<<<<<<< HEAD

const url=import.meta.env.VITE_SERVER_URL
export async function postProduct(product:any):Promise<number>{
    try{console.log('inside postproduct')
        for (let [key, value] of product.entries()) {
    console.log(`${key}:`, value);}
=======
import { Productform } from "../data";
const url=import.meta.env.VITE_SERVER_URL

export async function postProduct(product:Productform):Promise<number>{
    try{
>>>>>>> ef0a7b054815965c58113718d93a716f1ebb678d
        
    const query=`${url}/product/farmer`

    const response=await fetch(query,{
        method: "POST",
<<<<<<< HEAD
    
        credentials: "include",
        body:product
=======
        headers: {
          "Content-Type": "application/json", 
        },
        credentials: "include",
        body:JSON.stringify(product)
>>>>>>> ef0a7b054815965c58113718d93a716f1ebb678d
       
    })
    const result = await response.json(); 
    
    if (!response.ok) { 
        const error = await response.json();
        throw new Error(error.message || "Request failed")};
   
    return result}

    catch(error:any) {
        console.error("Errorposting product:", error);
        throw new Error(error)} 
  }