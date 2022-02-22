import { axiosInstance } from '../../Services';
import { stadium, stadiumcount } from '../actiontype/actiontype';

export function stadiumslist(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', 'v1/stadium/show')
        .then((res) => {
          dispatch({
            type: stadium.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadium.list.error,
            data: err
          });
          reject(err);
        })
    );
}

export function stadiumcounts() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', 'v1/stadium/count')
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: stadium.list.success,
              data: res?.data?.data
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: stadium.list.error,
            data: err
          });
          reject(err);
        })
    );
}
