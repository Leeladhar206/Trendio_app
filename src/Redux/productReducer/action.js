import axios from "axios"
import { GETDATA_REQUEST,GETDATA_SUCCESS,GETDATA_FAILURE, POSTDATA_REQUEST, POSTDATA_SUCCESS, POSTDATA_FAILURE, GETSINGLEPRODUCT_REQUEST, GETSINGLEPRODUCT_FAILURE, GETSINGLEPRODUCT_SUCCESS, EDITPRODUCT_SUCCESS, GETACCESSORIES_SUCCESS, GETACCESSORYSINGLEPRODUCT_SUCCESS} from "./actionType"


export const getData = (dispatch)=>{
   dispatch({type:GETDATA_REQUEST})
   axios.get(`https://handy-string-backend.onrender.com/products`)
   .then((res)=> dispatch({type:GETDATA_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GETDATA_FAILURE}))
}

export const getAccessories = (dispatch)=>{
   dispatch({type:GETDATA_REQUEST})
   axios.get(`https://handy-string-backend.onrender.com/accessories`)
   .then((res)=> dispatch({type:GETACCESSORIES_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GETDATA_FAILURE}))
}

export const postData = (newData)=>(dispatch)=>{
   dispatch({type:POSTDATA_REQUEST})
   axios.post(`https://handy-string-backend.onrender.com/products`,newData)
   .then((res)=> dispatch({type:POSTDATA_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:POSTDATA_FAILURE}))
}

export const getSingleProduct = (id)=> (dispatch)=>{
   dispatch({type:GETSINGLEPRODUCT_REQUEST})
   axios.get(`https://handy-string-backend.onrender.com/products`+"/"+id)
   .then((res)=> dispatch({type:GETSINGLEPRODUCT_SUCCESS, payload:res.data}))
   .catch((err)=> dispatch({type:GETSINGLEPRODUCT_FAILURE}))
}


export const getAccessoriesSingleProduct = (id)=> (dispatch)=>{
   dispatch({type:GETSINGLEPRODUCT_REQUEST})
   axios.get(`https://handy-string-backend.onrender.com/accessories`+"/"+id)
   .then((res)=> dispatch({type:GETACCESSORYSINGLEPRODUCT_SUCCESS, payload:res.data}))
   .catch((err)=> dispatch({type:GETSINGLEPRODUCT_FAILURE}))
}

export const editProduct = (id,data)=> (dispatch)=>{
     dispatch({type:GETDATA_REQUEST})
     axios.patch(`https://handy-string-backend.onrender.com/products/${id}`,data)
     .then((res)=> dispatch({type:EDITPRODUCT_SUCCESS}))
     .catch((err)=> dispatch({type:GETDATA_FAILURE}) )
}






