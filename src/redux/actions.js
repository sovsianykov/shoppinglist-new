import {useFetch} from "../api/api";
import axios from "axios";
import {GET_ORDERS, WRITE_CURRENT_PRODUCT} from "./types";


export const BASE_URL = "https://shoppinglist-new.herokuapp.com/api/items";

export function getOrders() {
    return async dispatch  =>{
      const response  = await axios.get(BASE_URL)
             dispatch({
                type: GET_ORDERS,
                payload: response.data
            })
    }
}
export function writeProduct(product) {
    console.log(product , "action")
     return  dispatch =>{
         dispatch({type: WRITE_CURRENT_PRODUCT,
             payload: product})
     }
}
