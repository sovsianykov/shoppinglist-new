
import axios from "axios"
import {BASE_URL} from "./api";

export const postOrder = (data) =>{
    try {

        axios.post(BASE_URL, data).then(res => console.log(res.data))

    } catch (e) {
        console.log(e.message("Post is unsuccessful"))
    }
}