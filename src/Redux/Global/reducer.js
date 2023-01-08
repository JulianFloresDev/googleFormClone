import { IS_FETCHING_ON, IS_FETCHING_OFF, MANAGE_MODAL_STATE, MANAGE_MODAL_CONTENT } from "./constants";

const INITIAL_STATE = {
  isFetching: false,
  isModalActive: false,
  modalContent: <></>
};

const globalReducer = (state= INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_FETCHING_ON:
      return {
        ...state,
        isModalActive: false,
        isFetching: true
      }
    case IS_FETCHING_OFF:
      return {
        ...state,
        isFetching: false
      }
    case MANAGE_MODAL_STATE:
      return {
        ...state,
        isModalActive: action.payload
      }
    case MANAGE_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload
      }
    default:
      return state;
  }
};

export default globalReducer;
