import { LIST_HOUSE_CATEGORY, ADD_HOUSE_CATEGORY, DELETE_HOUSE_CATEGORY, GET_LIST_HOUSE_CATEGORY_SUCCESS, GET_LIST_HOUSE_CATEGORY_FAIL } from "../constants"

export const listHouseCategory = (action) => {
  return {
    type: LIST_HOUSE_CATEGORY,
    payload: action
  }
}

export const addNewHouseCategory = (action) => {
  return {
    type: ADD_HOUSE_CATEGORY,
    payload: action
  }
}

export const deleteHouseCategory = (action) => {
  return {
    type: DELETE_HOUSE_CATEGORY,
    payload: action
  }
}

export const getListHouseCategorySuccess = (action) => {
  return {
    type: GET_LIST_HOUSE_CATEGORY_SUCCESS,
    payload: action,
  };
}

export const getListHouseCategoryFail = (action) => {
  return {
    type: GET_LIST_HOUSE_CATEGORY_FAIL,
    payload: action,
  };
}
