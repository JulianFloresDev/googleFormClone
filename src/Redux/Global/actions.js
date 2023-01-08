import { IS_FETCHING_ON, IS_FETCHING_OFF, MANAGE_MODAL_STATE, MANAGE_MODAL_CONTENT } from "./constants";

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