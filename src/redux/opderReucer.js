import {mockItems} from "../mock/mock";
import {GET_CURRENT_ORDER, GET_ORDERS, POST_ORDER, WRITE_CURRENT_ORDER, WRITE_CURRENT_PRODUCT} from "./types";


const initialState = {
    ordersList : [],
    currentOrder : mockItems,
    currentProduct : { name : "", amount: ""},
    deletedOrder : { name : "", amount: ""},
}
const orderReducer = ( state = initialState, action) =>{
      switch (action.type) {
          case GET_ORDERS :
              return  {
                  ...state,
                  ordersList: action.payload
              }
          case POST_ORDER :
              return  {
                  ...state,
                  postedOrder: action.payload
              }
          case GET_CURRENT_ORDER :
              return  {
                  ...state,
                  currentOrder: action.payload
              }
          case WRITE_CURRENT_PRODUCT :
              return  {
                  ...state,
                  currentOrder  :  state.currentOrder.forEach((el) => (
                  Object.keys(el)[0] === Object.keys(action.payload)[0] ? action.payload : el;)
                  )
              }
          default : return state;

      }
}
export default orderReducer;
