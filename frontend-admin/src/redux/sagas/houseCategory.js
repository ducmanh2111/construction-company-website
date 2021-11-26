import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import houseCategoryApi from "../../services/houseCategoryApi";
import { LIST_HOUSE_CATEGORY } from "../constants";
import { getListHouseCategorySuccess, getListHouseCategoryFail } from "../actions/houseCategory";

export function* getListHouseCategory() {
  yield takeEvery(LIST_HOUSE_CATEGORY, function* () {
    try {
      const response = yield call(houseCategoryApi.list);
      yield put(getListHouseCategorySuccess(response));
    } catch (error) {
      yield put(getListHouseCategoryFail(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getListHouseCategory)])
}
