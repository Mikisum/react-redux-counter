import {combineReducers} from 'redux';
import { CHANGE_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT, RESET } from "./types"

export function counterReducer(state = 0, action) {
  if(action.type === INCREMENT){
    return state + 1
  } else if (action.type === DECREMENT){
    return state - 1
  } else if(action.type === RESET) {
    return state = 0
  }
  return state
}

// const initialButtonsState = {
//   disabled: false
// }

export function buttonsReducer(state = false, action) {
  switch (action.type) {
    case ENABLE_BUTTONS: 
      return state= false;
    case DISABLE_BUTTONS: 
      return state=true  
    default: return state;
  }
}

export const rootReducer = combineReducers({
  counterReducer,
  buttonsReducer
})