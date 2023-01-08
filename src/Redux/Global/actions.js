import { IS_FETCHING_ON, IS_FETCHING_OFF, MANAGE_MODAL_STATE, MANAGE_MODAL_CONTENT, SET_DATA } from "./constants";

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload
  }
};

export const startFetching = () => {
  return {
    type: IS_FETCHING_ON,
  }
};

export const endFetching = () => {
  return {
    type: IS_FETCHING_OFF,
  }
};

export const manageModalActive = (payload) => {
  return {
    type: MANAGE_MODAL_STATE,
    payload
  }
};

export const manageModalContent = (payload) => {
  return {
    type: MANAGE_MODAL_CONTENT,
    payload
  }
};