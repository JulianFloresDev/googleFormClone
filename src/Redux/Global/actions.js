import {
  IS_FETCHING_ON,
  IS_FETCHING_OFF,
  MANAGE_MODAL_STATE,
  MANAGE_MODAL_CONTENT,
  MANAGE_MODAL_LOADING,
  SET_DATA,
  SET_AWNSER,
  SET_USER_AWNSER
} from "./constants";

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const setAwnser = (payload) => {
  return {
    type: SET_AWNSER,
    payload,
  };
};

export const setUserAwnser = (payload) => {
  return {
    type: SET_USER_AWNSER,
    payload,
  };
};

export const startFetching = () => {
  return {
    type: IS_FETCHING_ON,
  };
};

export const endFetching = () => {
  return {
    type: IS_FETCHING_OFF,
  };
};

export const manageModalLoading = (payload) => {
  return {
    type: MANAGE_MODAL_LOADING,
    payload,
  };
};

export const manageModalActive = (payload) => {
  return {
    type: MANAGE_MODAL_STATE,
    payload,
  };
};

export const manageModalContent = (payload) => {
  return {
    type: MANAGE_MODAL_CONTENT,
    payload,
  };
};
