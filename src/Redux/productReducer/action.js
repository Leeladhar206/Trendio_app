import axios from "axios"
import { GETDATA_REQUEST,GETDATA_SUCCESS,GETDATA_FAILURE, POSTDATA_REQUEST, POSTDATA_SUCCESS, POSTDATA_FAILURE, GETSINGLEPRODUCT_REQUEST, GETSINGLEPRODUCT_FAILURE, GETSINGLEPRODUCT_SUCCESS, EDITPRODUCT_SUCCESS, GETACCESSORIES_SUCCESS, GETACCESSORYSINGLEPRODUCT_SUCCESS, DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE, GETADMINDATA_SUCCESS, GETADMINDATA_REQUEST, GETADMINDATA_FAILURE, CUSTOMER_REQUEST, CUSTOMER_SUCCESS, CUSTOMER_FAILURE, EDITCUSTOMER_REQUEST, EDITCUSTOMER_SUCCESS, EDITCUSTOMER_FAILURE, DELCUSTOMER_REQUEST, DELCUSTOMER_SUCCESS, DELCUSTOMER_FAILURE, ORDER_SUCCESS} from "./actionType"
import { URL } from "../../Pages/Login"


export const getData = (paramsobj)=>(dispatch)=>{
   dispatch({type:GETDATA_REQUEST})
   axios.get(`${URL}/products`,paramsobj)
   .then((res)=> dispatch({type:GETDATA_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GETDATA_FAILURE}))

}
export const getAdminData = ()=>(dispatch)=>{
   dispatch({type:GETADMINDATA_REQUEST})
   axios.get(`${URL}/products`)
   .then((res)=> dispatch({type:GETADMINDATA_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GETADMINDATA_FAILURE}))
}

export const getCustomersData = ()=>(dispatch)=>{
   dispatch({type:CUSTOMER_REQUEST})
   axios.get(`${URL}/users`)
   .then((res)=> dispatch({type:CUSTOMER_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:CUSTOMER_FAILURE}))
}

export const getAccessories = (dispatch)=>{
   dispatch({type:GETADMINDATA_REQUEST})
   axios.get(`${URL}/accessories`)
   .then((res)=> dispatch({type:GETACCESSORIES_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GETADMINDATA_FAILURE}))
}

export const postData = (newData)=>(dispatch)=>{
   dispatch({type:POSTDATA_REQUEST})
   axios.post(`${URL}/products`,newData)
   .then((res)=> dispatch({type:POSTDATA_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:POSTDATA_FAILURE}))
}

export const deleteProduct = (id)=>(dispatch)=>{
   dispatch({type:DELETE_REQUEST})
   axios.delete(`${URL}/products/${id}`)
   .then((res)=> dispatch({type:DELETE_SUCCESS}))
   .catch((err)=> dispatch({type:DELETE_FAILURE}))
}

export const editCustomerData = (id,newData)=>(dispatch)=>{
   dispatch({type:EDITCUSTOMER_REQUEST})
   axios.patch(`${URL}/users/${id}`,newData)
   .then((res)=> dispatch({type:EDITCUSTOMER_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:EDITCUSTOMER_FAILURE}))
}

export const deleteCustomer = (id)=>(dispatch)=>{
   dispatch({type:DELCUSTOMER_REQUEST})
   axios.delete(`${URL}/users/${id}`)
   .then((res)=> dispatch({type:DELCUSTOMER_SUCCESS}))
   .catch((err)=> dispatch({type:DELCUSTOMER_FAILURE}))
}

// export const getSingleProduct = (id)=> (dispatch)=>{
//    dispatch({type:GETSINGLEPRODUCT_REQUEST})
//    axios.get(`${URL}/products`+"/"+id)
//    .then((res)=> dispatch({type:GETSINGLEPRODUCT_SUCCESS, payload:res.data}))
//    .catch((err)=> dispatch({type:GETSINGLEPRODUCT_FAILURE}))
// }


export const getAccessoriesSingleProduct = (id)=> (dispatch)=>{
   dispatch({type:GETSINGLEPRODUCT_REQUEST})
   axios.get(`${URL}/accessories/${id}`)
   .then((res)=> dispatch({type:GETACCESSORYSINGLEPRODUCT_SUCCESS, payload:res.data}))
   .catch((err)=> dispatch({type:GETSINGLEPRODUCT_FAILURE}))
}

export const editProduct = (id,data)=> (dispatch)=>{
     dispatch({type:GETDATA_REQUEST})
     axios.patch(`${URL}/products/${id}`,data)
     .then((res)=> dispatch({type:EDITPRODUCT_SUCCESS}))
     .catch((err)=> dispatch({type:GETDATA_FAILURE}) )
}

export const getOrdersData = ()=>(dispatch)=>{
   dispatch({type:CUSTOMER_REQUEST})
   axios.get(`${URL}/orders`)
   .then((res)=> dispatch({type:ORDER_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:CUSTOMER_FAILURE}))
}






