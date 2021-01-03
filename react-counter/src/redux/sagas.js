import { put, takeEvery, call} from 'redux-saga/effects';
import { requestBackground, requestBackgroundFailed, requestBackgroundSuccess} from './actions';
import { FETCH_BACKGROUND, RESET } from "./types";


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
  const url = `https://jsonplaceholder.typicode.com/photos/${random}`
  const response = await fetch(url) 
  const json = await response.json()
  return json.url
} 