import { LIST_HOUSE_CATEGORY, ADD_HOUSE_CATEGORY, DELETE_HOUSE_CATEGORY, GET_LIST_HOUSE_CATEGORY_SUCCESS, GET_LIST_HOUSE_CATEGORY_FAIL } from "../constants";

const initialState = {
  list: [],
}

const houseCategoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case LIST_HOUSE_CATEGORY: {
      return state;
    }

    case ADD_HOUSE_CATEGORY: {
      break;
    }

    case DELETE_HOUSE_CATEGORY: {
      break;
    }

    case GET_LIST_HOUSE_CATEGORY_SUCCESS: {
      return {
        ...state,
        list: action.payload.house_categories
      };
    }

    case GET_LIST_HOUSE_CATEGORY_FAIL: {
      break;
    }

    default: 
      return state;
  }
}

export default houseCategoryReducer;
