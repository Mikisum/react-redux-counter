import { put, takeEvery, call} from 'redux-saga/effects';
import { requestBackground, requestBackgroundFailed, requestBackgroundSuccess} from './actions';
import { FETCH_BACKGROUND } from "./types";


export function* sagaWatcher() {
  yield takeEvery(FETCH_BACKGROUND, fetchBackgroundAsync)
}

function* fetchBackgroundAsync() {
  try{
    yield put(requestBackground());
    const data = yield call(fetchBackground);
    yield put(requestBackgroundSuccess(data));
  } catch(error) {
    yield put(requestBackgroundFailed)
  }
}

async function fetchBackground() {
  let random = Math.ceil(Math.random()*100);
  const api_key = '2f8ea488a21e4fac07f04c7fffc9898d'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=nature,town&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
  const response = await fetch(url) 
  const json = await response.json()
  const res = json.photos.photo[random].url_h
  console.log(json);
  return res
} 