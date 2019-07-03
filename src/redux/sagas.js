import {all} from 'redux-saga/effects';
import applicationSagas from './application/sagas';



export default function* rootSaga(){
  yield all([
    applicationSagas()
  ])
}