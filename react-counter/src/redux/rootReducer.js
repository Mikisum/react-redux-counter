import { DECREMENT, INCREMENT, RESET } from "./types"

export function rootReducer(state = 0, action) {
  if(action.type === INCREMENT){
    return state + 1
  } else if (action.type === DECREMENT){
    return state - 1
  } else if(action.type === RESET) {
    return state = 0
  }
  return state
}