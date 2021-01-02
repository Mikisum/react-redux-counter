import {combineReducers} from 'redux';
import { CHANGE_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, HIDE_LOADER, INCREMENT, RESET, SHOW_LOADER } from "./types"

function counterReducer(state = 0, action) {
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

function buttonsReducer(state = false, action) {
  switch (action.type) {
    case ENABLE_BUTTONS: 
      return state= false;
    case DISABLE_BUTTONS: 
      return state=true  
    default: return state;
  }
}

function backgroundReducer(state = '', action) {
  if(action.type === CHANGE_BACKGROUND) {
    return state = action.payload;
  }
  return state
}

function loadingReducer(state = false, action) {
  switch (action.type) {
    case SHOW_LOADER: 
      return state= true;
    case HIDE_LOADER: 
      return state=false  
    default: return state;
  }
}

export const rootReducer = combineReducers({
  counterReducer,
  buttonsReducer,
  backgroundReducer,
  loadingReducer
})