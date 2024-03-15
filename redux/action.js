import { ADD_TO_CART } from "./constants";


export function add_to_cart(){
    return{
        type:ADD_TO_CART,
        data:item
    }
}