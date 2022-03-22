import { user } from '../actiontype/actiontype';

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
// export const userget = (state = initialState, actions) => {
//   switch (actions.type) {
//     case user.get.success:
//       return {
//         status: true,
//         payload: actions.data
//       };
//     case user.get.error:
//       return {
//         status: false,
//         payload: actions.data
//       };
//     default:
//       return state;
//   }
// };

// export const stadiumslist = (state = initialState, actions) => {
//   switch (actions.type) {
//     case stadium.list.success:
//       return {
//         status: true,
//         payload: actions.data
//       };
//     case stadium.list.error:
//       return {
//         status: false,
//         payload: actions.data
//       };
//     default:
//       return state;
//   }
// };
// export const stadiumcounts = (state = initialState, actions) => {
//   switch (actions.type) {
//     case stadium.list.success:
//       return {
//         status: true,
//         payload: actions.data
//       };
//     case stadium.list.error:
//       return {
//         status: false,
//         payload: actions.data
//       };
//     default:
//       return state;
//   }
// };
