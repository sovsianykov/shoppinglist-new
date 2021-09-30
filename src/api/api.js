import { useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://shoppinglist-new.herokuapp.com/api/items";
export const useFetch =  () => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(  () => {
    setIsLoading(true);
    try {
       axios.get(BASE_URL).then((r) => setResponse(r.data)).then(
           ()=>setIsLoading(false)
       );

    } catch (e) {
      console.log(e.message);
      setError(e);
    }


  },[]);
  return { response, isLoading, error };
};
