import {mockItems} from "../mock/mock";
import {GET_CURRENT_ORDER, GET_ORDERS, POST_ORDER, WRITE_CURRENT_PRODUCT} from "./types";
import {updateOrder} from "./utills";


const initialState = {
    ordersList : [],
    currentOrder : mockItems,
    postedOrder : '',
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
                  currentOrder  :  updateOrder(state.currentOrder,action.payload)
              }
          default : return state;

      }
}
export default orderReducer;
