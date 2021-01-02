import { CHANGE_BACKGROUND, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, HIDE_LOADER, INCREMENT, RESET, SHOW_LOADER } from "./types"

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

export function changeBackground(newBackground){
  return {
    type: CHANGE_BACKGROUND,
    payload: newBackground
  }
}

export function fetchBackground() {
  let random = Math.ceil(Math.random() * 100);
  const api_key = '2f8ea488a21e4fac07f04c7fffc9898d'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=nature,weather&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;

  return async dispatch => {
    dispatch(showLoader())
    const response = await fetch(url)
    const json = await response.json()
    console.log(json.photos.photo[random].url_h)
    dispatch({type: CHANGE_BACKGROUND, payload: json.photos.photo[random].url_h})
    dispatch(hideLoader())
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

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