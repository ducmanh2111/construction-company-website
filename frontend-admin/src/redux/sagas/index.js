import { all } from 'redux-saga/effects';
import houseCategory from './houseCategory';

export default function* rootSaga() {
  yield all([houseCategory()])
}
