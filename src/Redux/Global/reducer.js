import {
  SET_DATA,
  IS_FETCHING_ON,
  IS_FETCHING_OFF,
  MANAGE_MODAL_STATE,
  MANAGE_MODAL_CONTENT,
  MANAGE_MODAL_LOADING,
} from "./constants";

const INITIAL_STATE = {
  itemsFromData: [],
  isFetching: false,
  isModalActive: false,
  modalContent: <></>,
  isModalLoading: false,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        itemsFromData: [...action.payload],
      };
    case IS_FETCHING_ON:
      return {
        ...state,
        isModalActive: false,
        isFetching: true,
      };
    case IS_FETCHING_OFF:
      return {
        ...state,
        isFetching: false,
      };
    case MANAGE_MODAL_LOADING:
      return {
        ...state,
        isModalLoading: action.payload,
      };
    case MANAGE_MODAL_STATE:
      return {
        ...state,
        isModalActive: action.payload,
      };
    case MANAGE_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
