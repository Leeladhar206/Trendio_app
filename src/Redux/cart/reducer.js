import {
  FETCH_CART_REQ,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
} from "./actionTypes"

initialState = {
  isLoading: false,
  isError: false,
  products: [],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CART_REQ:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      }

    case FETCH_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state
  }
}
