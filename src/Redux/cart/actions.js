import axios from "axios"
import {
  FETCH_CART_REQ,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
} from "./actionTypes"
import { URL } from "../../Pages/Login"

export const getCart = (token) => (dispatch) => {
  axios({
    method: "get",
    url: `${URL}/carts`,
  })
    .then((r) => {
      return { type: FETCH_CART_SUCCESS, payload: r.data }
    })
    .catch((error) => {
      type: FETCH_CART_FAILURE
    })
}
