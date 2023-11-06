import axios from "axios"
import { addProducts } from "../reducers/productReducer"

export const asyncAddProductsAction = ()=>async(dispatch , getstate)=>{

    try {
        const {data} =  await axios.get(`https://fakestoreapi.com/products`)
 
        dispatch(addProducts(data))
        
    } catch (error) {
        console.log(error)
    }

}