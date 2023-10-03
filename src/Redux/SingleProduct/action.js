import axios from "axios"
import { GETACCESSORIES_SUCCESS } from "../productReducer/actionType"
import { GETSINGLEPRODUCT_FAILURE, GETSINGLEPRODUCT_REQUEST, GETSINGLEPRODUCT_SUCCESS } from "./actionType"
import { URL } from "../../Pages/Login"



export const getSingleProduct = (id)=> (dispatch)=>{
    dispatch({type:GETSINGLEPRODUCT_REQUEST})
    axios.get(`${URL}/products/${id}`)
    .then((res)=> dispatch({type:GETSINGLEPRODUCT_SUCCESS, payload:res.data}))
    .catch((err)=> dispatch({type:GETSINGLEPRODUCT_FAILURE}))
 }
 