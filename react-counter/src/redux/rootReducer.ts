import {combineReducers} from 'redux';
import { REQUEST_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT, RESET, REQUEST_BACKGROUND_SUCCESS, REQUEST_BACKGROUND_FAILED } from "./types"

function counterReducer(state = 0, action: any) {
  if(action.type === INCREMENT){
    return state + 1
  } else if (action.type === DECREMENT){
    return state - 1
  } else if(action.type === RESET) {
    return state = 0
  }
  return state
}

function buttonsReducer(state = false, action: any) {
  switch (action.type) {
    case ENABLE_BUTTONS: 
      return state= false;
    case DISABLE_BUTTONS: 
      return state=true  
    default: return state;
  }
}

export type InitialBackgroundType = {
  url: string,
  loading: boolean,
  error: boolean
}

let initialBackgroundState: InitialBackgroundType = {
  url: 'https://live.staticflickr.com/65535/50757525423_f0886331e0_h.jpg',
  loading: false,
  error: false
}

function backgroundReducer(state = initialBackgroundState, action: any): InitialBackgroundType {
  switch(action.type){
    case REQUEST_BACKGROUND:
      return { 
                url: '',
                loading: true,
                error: false,
              };
    case REQUEST_BACKGROUND_SUCCESS:
      return { 
                url: action.url,
                loading: false,
                error: false
              };
    case REQUEST_BACKGROUND_FAILED:
      return  { 
                url: '',
                loading: false,
                error: true
              };
    default: return state;      
  }
}

export const rootReducer = combineReducers({
  counterReducer,
  buttonsReducer,
  backgroundReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
