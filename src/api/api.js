import { useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "/api/items";
export const useFetch =  (url) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(  () => {
    setIsLoading(true);
    try {
       axios.get(url).then((r) => setResponse(r.data)).then(
           ()=>setIsLoading(false)
       );

    } catch (e) {
      console.log(e.message);
      setError(e);
    }


  },[ url]);
  return { response, isLoading, error };
};
