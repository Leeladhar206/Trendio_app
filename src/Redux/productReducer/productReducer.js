import { GETDATA_REQUEST,GETDATA_SUCCESS,GETDATA_FAILURE, POSTDATA_REQUEST, POSTDATA_FAILURE, POSTDATA_SUCCESS, GETSINGLEPRODUCT_REQUEST, GETSINGLEPRODUCT_FAILURE, GETSINGLEPRODUCT_SUCCESS, EDITPRODUCT_SUCCESS, GETACCESSORIES_SUCCESS, GETACCESSORYSINGLEPRODUCT_SUCCESS, DELETE_REQUEST, DELETE_FAILURE, DELETE_SUCCESS, GETADMINDATA_SUCCESS, GETADMINDATA_REQUEST, GETADMINDATA_FAILURE, CUSTOMER_REQUEST, CUSTOMER_FAILURE, CUSTOMER_SUCCESS, EDITCUSTOMER_SUCCESS, DELCUSTOMER_SUCCESS, DELCUSTOMER_REQUEST, EDITCUSTOMER_REQUEST, DELCUSTOMER_FAILURE, EDITCUSTOMER_FAILURE, ORDER_SUCCESS} from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    product:{},
    accessories:[],
    accessory:{},
    adminData:[],
    customers:[],
    orders:[]
}


const productReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case GETDATA_REQUEST|| POSTDATA_REQUEST|| GETSINGLEPRODUCT_REQUEST || DELETE_REQUEST || GETADMINDATA_REQUEST || CUSTOMER_REQUEST || DELCUSTOMER_REQUEST || EDITCUSTOMER_REQUEST:
        return {...state,isLoading:true}
    case GETDATA_FAILURE || POSTDATA_FAILURE|| GETSINGLEPRODUCT_FAILURE || DELETE_FAILURE || GETADMINDATA_FAILURE || CUSTOMER_FAILURE || DELCUSTOMER_FAILURE || EDITCUSTOMER_FAILURE:
        return {...state, isLoading:false, isError:true}    
    case GETDATA_SUCCESS:
        return {...state, isLoading:false, isError:false, products:payload}

    case GETADMINDATA_SUCCESS:
        return {...state, isLoading:false, isError:false, adminData:payload}

   case GETACCESSORIES_SUCCESS:
          return {...state, isLoading:false, isError:false, accessories:payload}    

   case CUSTOMER_SUCCESS:
          return {...state, isLoading:false, isError:false, customers:payload}     

    case POSTDATA_SUCCESS:
        return {...state,isLoading:false, isError:false,products:[...state.products,payload]}  

    case DELETE_SUCCESS:
        return {...state,isLoading:false, isError:false} 

    case EDITCUSTOMER_SUCCESS:
        return {...state,isLoading:false, isError:false}  

    case DELCUSTOMER_SUCCESS:
        return {...state,isLoading:false, isError:false}   

    case GETSINGLEPRODUCT_SUCCESS:
        return {...state, isLoading:false, isError:false,product:payload}   
    
    case GETACCESSORYSINGLEPRODUCT_SUCCESS:
        return {...state, isLoading:false, isError:false,accessory:payload}        
        
    case EDITPRODUCT_SUCCESS:
        return {...state, isLoading:false}    

  case ORDER_SUCCESS:
        return {...state, isLoading:false, isError:false, orders:payload}    
    default:
     return state;
  }
}

export default productReducer