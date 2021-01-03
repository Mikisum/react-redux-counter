import { REQUEST_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS,  INCREMENT, RESET, REQUEST_BACKGROUND_SUCCESS, REQUEST_BACKGROUND_FAILED, FETCH_BACKGROUND } from "./types"

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function reset() {
  return function(dispatch: any) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({ type: RESET })
      dispatch(enableButtons())
    }, 1000)
  }
}

export function fetchBackground() {
  return {
    type: FETCH_BACKGROUND
  }
}

export function requestBackground() {
  return {
    type: REQUEST_BACKGROUND
  }
}

export function requestBackgroundFailed() {
  return {
    type: REQUEST_BACKGROUND_FAILED
  }
}

export function requestBackgroundSuccess(data: string) {
  return {
    type: REQUEST_BACKGROUND_SUCCESS,
    url: data
  }
}

export function enableButtons(){
  return {
    type: ENABLE_BUTTONS
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}