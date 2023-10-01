import { AUTH_REQ, AUTH_REQ_SUCCESS, AUTH_REQ_FAILURE } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQ:
      return {
        ...state,
        isLoading: true,
      }

    case AUTH_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        isAuth: true,
      }

    case AUTH_REQ_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    default:
      return state
  }
}
