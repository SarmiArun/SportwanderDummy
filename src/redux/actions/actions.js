import { axiosInstance } from '../../Services';
import { user, KYC, stadiumowner, event } from '../actiontype/actiontype';

export function userlogin(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/login', data)
        .then((res) => {
          localStorage.setItem('AuthTokAdmin', res.data.data);
          dispatch({
            type: user.login.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: user.login.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycpending(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/pending')
        .then((res) => {
          dispatch({
            type: KYC.pending.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.pending.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycverify(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/verified')
        .then((res) => {
          dispatch({
            type: KYC.verify.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.verify.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycreject(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/rejected')
        .then((res) => {
          dispatch({
            type: KYC.rejected.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.rejected.error,
            data: err
          });
          reject(err);
        })
    );
}

export function kycupdate(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/kyc/update', data)
        .then((res) => {
          dispatch({
            type: KYC.update.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.update.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownercreate(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/stdowner/signup', data)
        .then((res) => {
          dispatch({
            type: stadiumowner.create.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.create.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownerlist() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/stadium_owner/list')
        .then((res) => {
          dispatch({
            type: stadiumowner.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownercount() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/stadium_owner/count')
        .then((res) => {
          if (res.data.data === 'Access Denied, Invalid Token') {
            localStorage.clear();
            window.location.href = '/login';
          }
          dispatch({
            type: stadiumowner.count.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.count.error,
            data: err
          });
          reject(err);
        })
    );
}
export function eventorglist() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/organizer/list')
        .then((res) => {
          dispatch({
            type: event.List.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: event.List.error,
            data: err
          });
          reject(err);
        })
    );
}
export function eventorgcount() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/organizer/count')
        .then((res) => {
          dispatch({
            type: event.count.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: event.count.error,
            data: err
          });
          reject(err);
        })
    );
}
