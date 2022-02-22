import { stadium } from '../actiontype/actiontype';

const initialState = {};

export const stadiumslist = (state = initialState, actions) => {
  switch (actions.type) {
    case stadium.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadium.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumcounts = (state = initialState, actions) => {
  switch (actions.type) {
    case stadium.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadium.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
