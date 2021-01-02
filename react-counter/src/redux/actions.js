import { ASYNC_INCREMENT, CHANGE_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT, RESET } from "./types"

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
  return function(dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({ type: RESET })
      dispatch(enableButtons())
    }, 2000)
   
  }
}

export function background() {
  return {
    type: CHANGE_BACKGROUND
  }
}

// export function asyncIncrement() {
//   return function(dispatch) {
//     dispatch({ type: ASYNC_INCREMENT })
//   }
// }


export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}