import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../redux/actions";


export const useOrders = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(getOrders())
    },[dispatch])
}
