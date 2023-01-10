import {
  SET_DATA,
  IS_FETCHING_ON,
  IS_FETCHING_OFF,
  MANAGE_MODAL_STATE,
  MANAGE_MODAL_CONTENT,
  MANAGE_MODAL_LOADING,
  SET_AWNSER,
  SET_USER_AWNSER
} from "./constants";

const INITIAL_STATE = {
  itemsFromData: [],
  isFetching: false,
  isModalActive: false,
  modalContent: <></>,
  isModalLoading: false,
  hasAwnser: false,
  userAwnser: {}
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
    case SET_AWNSER:
      return {
        ...state,
        hasAwnser: action.payload,
      };
    case SET_USER_AWNSER:
      return {
        ...state,
        userAwnser: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
