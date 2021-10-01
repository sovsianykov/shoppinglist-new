import {  format } from 'date-fns'
import axios from "axios";
import {GET_ORDERS, POST_ORDER, WRITE_CURRENT_PRODUCT} from "./types";
import {postOrder} from "../api/postOrder";


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
     return  dispatch =>{
         dispatch({type: WRITE_CURRENT_PRODUCT,
             payload: product})
     }
}
export function postTheOrder(list) {
    let arr = list.filter(item => item.amount !== "" )
    let newMessage =``;
    for (let x of arr) {
   newMessage += ` ${Object.values(x)[1]} - ${Object.values(x)[2]},  `
    }
    newMessage = `заказано ${format( Date.now(),"MM/dd/yyyy 'в' h:mm a")} ${newMessage}   `
    console.log(newMessage)
    postOrder({"name" : newMessage })
    return  dispatch =>{
        dispatch({
            type: POST_ORDER,
            payload: newMessage
        })
    }
}
