import { user, KYC, stadiumowner, event } from '../actiontype/actiontype';

const initialState = {};

export const userlogin = (state = initialState, actions) => {
  switch (actions.type) {
    case user.login.success:
      return {
        status: true,
        payload: actions.data
      };
    case user.login.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycverify = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.verify.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.verify.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycpending = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.pending.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.pending.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycreject = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.rejected.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.rejected.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycupdate = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.update.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.update.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownercreate = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.create.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.create.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownerlist = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownercount = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.count.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.count.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumeventlist = (state = initialState, actions) => {
  switch (actions.type) {
    case event.List.success:
      return {
        status: true,
        payload: actions.data
      };
    case event.List.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const eventorgcount = (state = initialState, actions) => {
  switch (actions.type) {
    case event.count.success:
      return {
        status: true,
        payload: actions.data
      };
    case event.count.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
