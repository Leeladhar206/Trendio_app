import { AUTH_REQ, AUTH_REQ_SUCCESS, AUTH_REQ_FAILURE } from "./actionTypes"

interface State {
  isLoading: boolean
  isError: boolean
  isAuth: boolean
  token: string // Replace 'string' with the actual token type if known
}

const initialState: State = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}

type Action = {
  type: string
  payload: string // Replace 'any' with the actual payload type if known
}

export const reducer = (state: State = initialState, action: Action): State => {
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
