import { GETSINGLEPRODUCT_FAILURE, GETSINGLEPRODUCT_REQUEST, GETSINGLEPRODUCT_SUCCESS } from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    product:{},
    
}


const singleProductReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case  GETSINGLEPRODUCT_REQUEST:
        return {...state,isLoading:true}
    case  GETSINGLEPRODUCT_FAILURE:
        return {...state, isLoading:false, isError:true}    
  
    case GETSINGLEPRODUCT_SUCCESS:
        return {...state, isLoading:false, isError:false,product:payload}   
    
    default:
     return state;
  }
}

export default singleProductReducer